def video_analysis_prompt(video: dict, comments: list, transcript: str) -> str:
    return f"""
    You are a media analyst trained to evaluate online content for logic, credibility, audience perception, and cultural significance. Use a thoughtful, unbiased, and analytical tone.
    VIDEO METADATA
    - Tags: {", ".join(video.get("tags", []))}

    TRANSCRIPT
    {transcript}

    COMMENTS
    {chr(10).join(comments[:30])}

    ANALYSIS TASKS
    1. **Core Idea**  
    What is the main idea or message of the content?

    2. **Argument Quality**  
    Highlight major claims. Are they logical, biased, or well-supported?

    3. **Fact Check**  
    Flag any statements that require verification or seem misleading.

    4. **Audience Reaction**  
    What patterns or sentiments emerge from the comments?

    5. **Critical Reflection**  
    What broader cultural or societal themes does this content touch on?

    RESPONSE REQUIREMENTS
    - Use structured headings
    - Use bullet points for analysis within each section
    - Be concise, analytical, and objective
    """
