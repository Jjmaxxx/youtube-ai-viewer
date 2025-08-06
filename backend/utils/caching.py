import hashlib
import os
import json
from utils.helpers import get_cache_dir

CACHE_DIR = get_cache_dir()


def get_cache(key):
    path = os.path.join(CACHE_DIR, f"{key}.json")
    if os.path.exists(path):
        with open(path, "r") as f:
            return json.load(f)
    return None


def set_cache(key, value):
    path = os.path.join(CACHE_DIR, f"{key}.json")
    with open(path, "w") as f:
        json.dump(value, f)


def make_cache_key(input_str):
    return hashlib.md5(input_str.encode()).hexdigest()
