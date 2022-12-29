from PIL import Image, ImageDraw
import random
import math
import os
import sys
import json
import ast
from pathlib import Path


def generate_art(url, img_id):
    # Initialize folders where the nft will be kept and how it will be named.
    nft_folder = Path('public/img/nfts/assets')
    nft_name = img_id + '.png'

    nft_save_link = os.path.join(nft_folder, nft_name)
    nftLinkPath = "/img/nfts/assets/" + nft_name

    # Resize the image for convenience
    resized_img_link = resizeImage(url, img_id)

    img_id, code_link, nft_code = generateCode(
        img_id)  # Generate the code for the NFT
    main_img = Image.open(resized_img_link)  # Open the resized image
    code_img = Image.open(code_link)  # Open the code image

    # Get the width and Heigth of the main image after resizing
    w_main, h_main = main_img.size
    w_code, h_code = code_img.size

    nft_img = main_img.copy()
    nft_img.paste(code_img, (25, h_main-(h_code + 25)))

    nft_img.save(nft_save_link)

    return nftLinkPath, code_link, nft_code


def resizeImage(url, img_id):
    site_img_display_folder = Path('public/img/nfts/resized')
    if (isImage(url)):
        # Rename the image and save it
        renamed_img_url, name = imgConvert(url, img_id)
        # creating and saving small image
        image_thumb = os.path.join(site_img_display_folder, name)
        image = Image.open(renamed_img_url)
        image.thumbnail((500, 500), Image.ANTIALIAS)
        image.save(image_thumb, optimize=True, quality=95)

        return image_thumb


def imgConvert(url, img_id):
    renamed_img_folder = Path('public/img/nfts/renamed')
    if (isImage(url)):
        try:
            img = Image.open(url)
            new_name = img_id + ".png"
            photo_save_link = os.path.join(renamed_img_folder, new_name)
            rgb_img = img.convert("RGB")

            rgb_img.save(photo_save_link)
            return photo_save_link, new_name
        except:
            print('Not converted due to error')
            return (' ')


def generateCode(nft_id):
    origin = (0, 0)
    image_size = (50, 50)
    bg_color = (40, 40, 40)
    fg_colors = [(64, 78, 237), (193, 193, 193)]
    img = Image.new("RGB", image_size, bg_color)
    padding = 6

    # Initiate Draw Object
    draw = ImageDraw.Draw(img)
    w, h = img.size

    # Create y-Coordinates
    Coordinates = []
    for _ in range(100):
        x = random.randint((0+padding)/2, (w-padding)/2)*2
        y = random.randint((0+padding)/2, (h-padding)/2)*2
        color = random.randint(0, 1)
        Coordinates.append([(x, y), color])

    for coordinate in Coordinates:
        draw.point(coordinate[0], fg_colors[coordinate[1]])

    code_name = str(nft_id) + "_code.png"
    save_link = Path("public/img/nfts/codes")
    save_dir = os.path.join(save_link, code_name)

    img.save(save_dir)

    return nft_id, save_dir, Coordinates


def isImage(image_url):
    try:
        Image.open(image_url)
        boolean = True
    except:
        boolean = False
    return boolean


if __name__ == "__main__":
    input = sys.argv

    img_link = input[1]
    img_id = input[2]

    srcPath = Path(img_link)
    output = []
    # print(input[1], input[2])
    nft_link, code_link, code = generate_art(srcPath, img_id)

    output.append(nft_link)
    output.append(code_link)
    output.append(code)
    print(json.dumps(output))

    sys.stdout.flush()
