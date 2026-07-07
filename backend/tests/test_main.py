from fastapi import HTTPException
import pytest

def test_custom_exception_handler():
    # main.py içindeki handler fonksiyonumuzu içeri alıyoruz
    from app.main import custom_http_exception_handler
    from fastapi import Request
    
    # FastAPI'nin (Starlette) hata vermemesi için gerekli tüm minimum alanları sağlıyoruz
    request_mock = Request(scope={
        "type": "http", 
        "path": "/test-hata-adresi",
        "headers": [],  # İşte bizi durduran eksik burasıydı!
    })
    exc_mock = HTTPException(status_code=400, detail="Giriş verisi hatalı!")
    
    # Handler fonksiyonumuzu asenkron olarak doğrudan çağırıyoruz
    import asyncio
    response = asyncio.run(custom_http_exception_handler(request_mock, exc_mock))
    
    # Dönen cevabı çözüyoruz
    import json
    body = json.loads(response.body.decode())
    
    # Sonuçların doğruluğunu test ediyoruz
    assert response.status_code == 400
    assert body["status"] == "error"
    assert body["code"] == 400
    assert body["message"] == "Giriş verisi hatalı!"
    assert body["path"] == "/test-hata-adresi"