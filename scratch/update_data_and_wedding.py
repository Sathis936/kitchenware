# -*- coding: utf-8 -*-
"""
Update js/data.js and js/wedding.js:
- Fix 6: Product images for prod-13 (Idli Cooker), prod-14 (Chef Frypan), prod-15 (Ghee Pot)
- Fix 7: Wedding collection images for ws-41, ws-32, ws-81
- Fix 16: Refined descriptions and single-line inclusion text so they fit perfectly at 1024px/768px
"""

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 6: Update prod-13, prod-14, prod-15 images
# prod-13: Multi-tier Idli Cooker
content = content.replace(
    "id: 'prod-13',\n    name: 'Multi-Tier Stainless Steel Idli Cooker with Whistle (16 Idlis)',\n    category: 'cookware',\n    categoryName: 'Cookware',\n    badge: 'Best Seller',\n    rating: 4.8,\n    reviewsCount: 214,\n    price: 1450,\n    oldPrice: 1850,\n    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80'",
    "id: 'prod-13',\n    name: 'Multi-Tier Stainless Steel Idli Cooker with Whistle (16 Idlis)',\n    category: 'cookware',\n    categoryName: 'Cookware',\n    badge: 'Best Seller',\n    rating: 4.8,\n    reviewsCount: 214,\n    price: 1450,\n    oldPrice: 1850,\n    image: 'https://images.unsplash.com/photo-1584990347449-399066e60b24?auto=format&fit=crop&w=800&q=80'"
)

# prod-14: Tri-Ply Chef Frypan
content = content.replace(
    "id: 'prod-14',\n    name: 'Tri-Ply Induction Chef Frypan with Cool-Touch Cast Handle (24cm)',\n    category: 'cookware',\n    categoryName: 'Cookware',\n    badge: 'Chef Choice',\n    rating: 4.9,\n    reviewsCount: 178,\n    price: 1690,\n    oldPrice: 2100,\n    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80'",
    "id: 'prod-14',\n    name: 'Tri-Ply Induction Chef Frypan with Cool-Touch Cast Handle (24cm)',\n    category: 'cookware',\n    categoryName: 'Cookware',\n    badge: 'Chef Choice',\n    rating: 4.9,\n    reviewsCount: 178,\n    price: 1690,\n    oldPrice: 2100,\n    image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=800&q=80'"
)

# prod-15: Airtight Ghee Pot
content = content.replace(
    "id: 'prod-15',\n    name: 'Airtight Stainless Steel Ghee Pot with Drip-Free Spout (650ml)',\n    category: 'storage',\n    categoryName: 'Storage & Canisters',\n    badge: 'Heritage Design',\n    rating: 4.7,\n    reviewsCount: 132,\n    price: 490,\n    oldPrice: 650,\n    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80'",
    "id: 'prod-15',\n    name: 'Airtight Stainless Steel Ghee Pot with Drip-Free Spout (650ml)',\n    category: 'storage',\n    categoryName: 'Storage & Canisters',\n    badge: 'Heritage Design',\n    rating: 4.7,\n    reviewsCount: 132,\n    price: 490,\n    oldPrice: 650,\n    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'"
)

# Fix 7: Update wedding set images
# ws-41: Modern Minimalist
content = content.replace(
    "image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80'",
    "image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'"
)

# ws-32: Everyday New Home Starter
content = content.replace(
    "image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80'",
    "image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=900&q=80'"
)

# ws-81: Grand Gathering
content = content.replace(
    "image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=900&q=80'",
    "image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80'"
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("js/data.js updated successfully.")
