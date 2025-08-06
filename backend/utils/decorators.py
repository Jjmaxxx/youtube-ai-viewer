from flask import jsonify
from functools import wraps
from utils.caching import get_cache, set_cache, make_cache_key
import json

def format_response(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        if isinstance(result, tuple) and len(result) == 2:
            data, status_code = result
        else:
            data, status_code = result, 200
        return jsonify(data), status_code

    return wrapper


def use_cache(get_key_from_request):
    def decorator(f):
        @wraps(f)
        def wrapped(*args, **kwargs):
            key = make_cache_key(get_key_from_request())
            cached = get_cache(key)
            if cached:
                return cached

            result = f(*args, **kwargs)
            
            try:
                json.dumps(result)
                set_cache(key, result)
            except Exception as e:
                print(f"Skipping cache for key {key}: {e}")
            return result

        return wrapped

    return decorator
