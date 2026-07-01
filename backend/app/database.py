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
else:
    # 2. Adım: Eğer bulutta değilsek (lokaldeysek), senin eski Docker-compose ayarın tıkır tıkır çalışsın:
    DATABASE_URL = "postgresql://user:password@db:5432/mydatabase"

# 3. Adım: Motoru (Engine) yukarıda belirlenen dinamik URL ile oluşturuyoruz
engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()