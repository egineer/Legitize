from PIL import Image, ImageDraw
import random
import math

def generate_art():
    origin = (0,0)
    image_size =  (128,128)
    bg_color = (255,0,0)
    img = Image.new("RGB", image_size, bg_color)
    padding = 16
    
    points = []
    points1 = []
    points2 = []

    #Draw lines
    draw = ImageDraw.Draw(img)
    #create y coordinates
    ys = []
    for _ in range(108):
        ys.append(_)
        
    #create points x and y
    for y in ys:
        point1 = (math.sqrt((64**2)-((y - 64)**2)) + 64, y)
        point2 = (-1 * math.sqrt((64**2)-((y - 64)**2)) + 64, y)
        print(point1, point2, '\n')
        points1.append(point1)
        points2.append(point2)
        
    for point in points2:
        points.append(point)
    for point in points1:
        points.append(point)
    #Create points
#     for _ in range(50):
#         point =  (random.randint(padding, 128 - padding), random.randint(padding, 128 - padding))
#         points.append(point)
    
    #Draw lines
    for i in range(len(points)):
        if i == len(points)-1:
            ran_start = points[i]
            ran_end = points[0]
        else:
            ran_start = points[i]
            ran_end = points[i + 1]
            
        line_xy = (ran_start, ran_end)
        line_color = (255,255,255)
        thickness = 1
        draw.line(line_xy, fill= line_color, width=thickness)
    
    img.save("new_img.png")