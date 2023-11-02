from lxml import etree
import os
import time
import json

# Define a function to process XML files and create JSON output
def process_xml_to_json(xml_file, json_file, order_count):
    output_info = []
    i = 0

    # Parse the XML file
    parser = etree.XMLParser(strip_cdata=False)
    tree = etree.parse(xml_file, parser)
    worksheet = tree.find('.//{urn:schemas-microsoft-com:office:spreadsheet}Worksheet')
    table = worksheet.find('.//{urn:schemas-microsoft-com:office:spreadsheet}Table')
    rows = table.findall('.//{urn:schemas-microsoft-com:office:spreadsheet}Row')

    for row in rows[2:]:
        cells = row.findall('{urn:schemas-microsoft-com:office:spreadsheet}Cell')

        # Check if the cells list has enough elements before accessing specific indices
        if len(cells) >= 129:
        
            data_product_uid = cells[4].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
            data_price = cells[37].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
            data_category = cells[1].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
            data_name = cells[6].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
            data_brand = cells[66].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
            data_regdate = cells[79].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
            data_ordercount = cells[82].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
            data_img = cells[50].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')

            data_year = "-"
            for idx, cell in enumerate(cells):
               cell_text = cell.find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
               if cell_text is not None and cell_text.text == '발행연도':
                   next_cell = cells[idx + 1].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
                   if next_cell is not None:
                       data_year = next_cell.text
            data_country = "-"
            for idx, cell in enumerate(cells):
               cell_text = cell.find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
               if cell_text is not None and cell_text.text == '발행국':
                   next_cell = cells[idx + 1].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
                   if next_cell is not None:
                       data_country = next_cell.text
            data_weight = "-"
            for idx, cell in enumerate(cells):
               cell_text = cell.find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
               if cell_text is not None and cell_text.text == '중량':
                   next_cell = cells[idx + 1].find('{urn:schemas-microsoft-com:office:spreadsheet}Data')
                   if next_cell is not None:
                       data_weight = next_cell.text

            if all(data is not None and data != '' for data in [data_product_uid, data_brand, data_regdate , data_price, data_category, data_name, data_ordercount, data_img]):
                data_product_uid = data_product_uid.text
                data_price = data_price.text
                data_category = data_category.text
                data_ordercount = data_ordercount.text
                data_name = data_name.text
                data_brand = data_brand.text
                data_regdate = data_regdate.text


                # Check if data_ordercount is a non-empty string before converting to an integer
                if data_ordercount is not None and data_ordercount != '':
                    data_ordercount = int(data_ordercount)
                else:
                    data_ordercount = 0  # Set a default value of 0

                data_img = data_img.text

                data_object = {
                    "id": data_product_uid,
                    "name": data_name,
                    "category": data_category,
                    "price": data_price,
                    "brand": data_brand,
                    "thumbnail": data_img,
                    "ordercount": data_ordercount,
                    "regDate": data_regdate,
                    "year": data_year,
                    "country": data_country,
                    "weight": data_weight
                }

                if data_ordercount > order_count:
                    print(i)
                    i = i + 1
                    output_info.append(data_object)

    with open(json_file, 'w', encoding='utf-8') as current_json_file:
        json.dump(output_info, current_json_file, indent=4, ensure_ascii=False)

# Define paths for silver.xml and gold.xml
excell_folder = os.path.join(os.getcwd(), 'excell')
silver_xml_file = os.path.join(excell_folder, 'silver.xml')
gold_xml_file = os.path.join(excell_folder, 'gold.xml')
art_xml_file = os.path.join(excell_folder, 'art.xml')



print("SILVER ###############")
# Process silver.xml and save as silver.json
process_xml_to_json(silver_xml_file, 'json/silver.json', 300)
print("GOLD ###############")
# Process gold.xml and save as gold.json
process_xml_to_json(gold_xml_file, 'json/gold.json', 30)
print("ART ###############")
# Process gold.xml and save as gold.json
process_xml_to_json(art_xml_file, 'json/art.json', 0)
