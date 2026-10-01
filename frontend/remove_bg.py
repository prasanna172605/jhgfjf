import os
from rembg import remove
from PIL import Image

image_dir = "d:/Vajra/frontend/public/images"
images = ["hero-cutout.jpg", "fitness-cutout.jpg", "silambam-cutout.jpg"]

for img_name in images:
    input_path = os.path.join(image_dir, img_name)
    output_path = os.path.join(image_dir, img_name.replace('.jpg', '.png'))
    
    if os.path.exists(input_path):
        print(f"Removing background from {img_name}...")
        try:
            input_image = Image.open(input_path)
            output_image = remove(input_image)
            output_image.save(output_path)
            print(f"Saved {output_path}")
        except Exception as e:
            print(f"Error processing {img_name}: {e}")
    else:
        print(f"File not found: {input_path}")
