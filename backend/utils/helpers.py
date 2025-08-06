import os

def get_cache_dir():
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    cache_dir = os.path.join(base_dir, "caches")
    os.makedirs(cache_dir, exist_ok=True)
    return cache_dir