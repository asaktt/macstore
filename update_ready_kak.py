import json

file_path = r"c:\Users\Macxy\Downloads\New folder (2)\tesweb-main (1)\tesweb-main\PRODUCT_LIST.json"

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

count = 0
for section in data['sections']:
    for product in section['products']:
        if 'whatsappText' in product:
            if 'Ready Kak?' not in product['whatsappText']:
                product['whatsappText'] += ' Ready Kak?'
                count += 1

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Updated {count} whatsappText fields")
