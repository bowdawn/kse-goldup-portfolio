from bs4 import BeautifulSoup

file_encoding = "utf-8"
# Load the HTML file
with open("assets/html/counties.html", "r", encoding=file_encoding) as html_file:
    html_content = html_file.read()

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# Find the table element (you may need to adjust the selector based on your HTML structure)
table = soup.find("table")

# If a table element is found
if table:
    # Find the first row to determine the number of columns
    first_row = table.find("tr")
    
    # Find all the cells (td or th) in the first row
    cells = first_row.find_all(["td", "th"])
    
    # Count the number of cells to get the number of columns
    num_columns = len(cells)
    # Find all the table rows (tr) in the table
    rows = table.find_all("tr")
    
    # Count the number of rows
    num_rows = len(rows)


    
    
    print("Number of columns in the table: ", num_columns)
    print("Number of rows in the table: ", num_rows)

else:
    print("No table found in the HTML.")
