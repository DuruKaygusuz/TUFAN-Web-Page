import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# 1. Adım: Render'daki güvenli çevre değişkenini (Environment Variable) kontrol et
DATABASE_URL = os.getenv("DATABASE_URL")

if DATABASE_URL:
    # Render bazen bağlantıyı 'postgres://' olarak verir, ancak SQLAlchemy 'postgresql://' ister.
    # Siber güvenlik ve uyumluluk için bu küçük kelime oyununu kodla düzeltiyoruz:
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    
    # URL içindeki kullanıcı adı ve şifredeki özel karakterleri (örneğin '@') encode edelim
    try:
        from urllib.parse import quote_plus
        if "@" in DATABASE_URL:
            scheme_split = DATABASE_URL.split("://", 1)
            if len(scheme_split) == 2:
                scheme, rest = scheme_split
                if "/" in rest:
                    authority, db_name = rest.split("/", 1)
                else:
                    authority = rest
                    db_name = ""
                if "@" in authority:
                    userinfo, host = authority.rsplit("@", 1)
                    if ":" in userinfo:
                        username, password = userinfo.split(":", 1)
                        encoded_userinfo = f"{quote_plus(username)}:{quote_plus(password)}"
                    else:
                        encoded_userinfo = quote_plus(userinfo)
                    DATABASE_URL = f"{scheme}://{encoded_userinfo}@{host}/{db_name}"
    except Exception:
        pass
else:
    # 2. Adım: Eğer bulutta değilsek (lokaldeysek) SQLite fallback kullanalım:
    DATABASE_URL = os.getenv("LOCAL_DATABASE_URL", "sqlite:///./sql_app.db")

# 3. Adım: Motoru (Engine) yukarıda belirlenen dinamik URL ile oluşturuyoruz
connect_args = {"check_same_thread": False} if "sqlite" in DATABASE_URL else {}
engine = create_engine(DATABASE_URL, connect_args=connect_args)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()