import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Güvenlik için şifreyi kodda saklamıyoruz, environment'tan okuyoruz.
# Render'da ayarlanana kadar çökmemesi için geçici bir sqlite fallback'i ekliyoruz.
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")

# SQLAlchemy'nin psycopg2 sürücüsüyle sorunsuz çalışması için URL düzeltmeleri
if DATABASE_URL:
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+psycopg2://", 1)
    elif DATABASE_URL.startswith("postgresql://") and not DATABASE_URL.startswith("postgresql+psycopg2://"):
        DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+psycopg2://", 1)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()