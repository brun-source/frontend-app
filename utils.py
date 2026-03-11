
class ConfigManager:
    def __init__(self, path: str):
        self.path = path
        self._cache = {}

    def get(self, key):
        return self._cache.get(key)


import hashlib

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

