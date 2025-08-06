from openai import OpenAI
import os
from services.prompt_templates import video_analysis_prompt
client = OpenAI()

def analyze_video(data: dict[dict,list,str])-> dict:
    video = data["video"]
    comments = data["comments"]
    transcript = data["transcript"]
    
    prompt = video_analysis_prompt(video=video, comments = comments, transcript = transcript)
    response = client.chat.completions.create(
        model="gpt-4.1-nano",
        messages=[
            {"role": "user", "content": prompt}
        ],
        max_tokens=1500
    )
    return {"insight": response.choices[0].message.content}