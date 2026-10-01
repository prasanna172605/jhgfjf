import os
import glob
from rembg import remove
from PIL import Image

source_dir = r"C:\Users\PRASANNA\.gemini\antigravity-ide\brain\6aa6e5ba-0320-4bca-8bd2-4607ded2cc59"
target_dir = r"d:\Vajra\frontend\public\images"

patterns = ["home_yoga_*.jpg", "home_calisthenics_*.jpg"]

for pattern in patterns:
    files = glob.glob(os.path.join(source_dir, pattern))
    if not files:
        print(f"No file found for {pattern}")
        continue
        
    latest_file = max(files, key=os.path.getctime)
    
    base_name = pattern.split('_')[0] + "_" + pattern.split('_')[1] + "-cutout.png"
    target_path = os.path.join(target_dir, base_name)
    
    print(f"Processing {latest_file} -> {target_path}")
    try:
        input_image = Image.open(latest_file)
        output_image = remove(input_image)
        output_image.save(target_path)
        print(f"Successfully saved {target_path}")
    except Exception as e:
        print(f"Error: {e}")
