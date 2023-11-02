// Function to calculate profit percentage





export function getRecentTransactionPrice(asset: { price: string; category: string; }): number {
  const { price, category } = asset;

  switch (category) {
    case '실버':
      return parseInt(price) * 1.3; // 1.3 times the price for category '실버'
    case '골드':
      return parseInt(price)  * 1.2;
    case '아트 컬렉션':
      return parseInt(price)  * 1.1;  // 1.1 times the price for category '아트 컬렉션'
    default:
      return parseInt(price) ; // Return original price for unknown categories
  }
}


export function getProfitPercentage(asset: { price: string; category: string; } ) {
    const { price } = asset;
    const recentTransactionPrice = getRecentTransactionPrice(asset);
    const profitAmount = recentTransactionPrice - parseInt(price) ;
    const profitPercentage = (profitAmount / parseInt(price) ) * 100;
    return profitPercentage.toFixed(2); // Return as a string with 2 decimal places
  }

  // Function to calculate the total purchase price
export function getTotalPurchasePrice(assets: any[]) {
    return assets.reduce((total: any, asset: { price: any; }) => total + parseInt(asset.price), 0);
  }
  
  // Function to calculate the total recent transaction price
export function getTotalRecentTransactionPrice(assets: any[]) {
    return assets.reduce((total: any, asset: any) => total + getRecentTransactionPrice(asset), 0);
  }
  
  // Function to calculate the total percentage change
export function getTotalPercentageChange(assets: any) {
    const totalPurchasePrice = getTotalPurchasePrice(assets);
    const totalRecentTransactionPrice = getTotalRecentTransactionPrice(assets);
    const totalChange = totalRecentTransactionPrice - totalPurchasePrice;
    const totalPercentageChange = (totalChange / totalPurchasePrice) * 100;
    return totalPercentageChange.toFixed(2); // Return as a string with 2 decimal places
}



export const groupProductsByCategory  = (products: any[]): any[] => {
  const grouped: { [key: string]: { category: string, totalPrice: number, products: any[] } } = {};

  products.forEach((product) => {
    const { category, price } = product;
    const parsedPrice = parseFloat(price);
    
    if (isNaN(parsedPrice)) return;  // Skip invalid prices

    if (!grouped[category]) {
      grouped[category] = { category, totalPrice: 0, products: [] };
    }
    
    grouped[category].totalPrice += parsedPrice;
    grouped[category].products.push(product);
  });

  // Extract the values (lists of products) and return as an array
  return Object.values(grouped).map((group) => ({
    category: group.category,
    price: group.totalPrice,
    products: group.products,
  }));
};



const generateRandomNumber = (min : number, max : number) => {
  return Math.floor(Math.random() * (max - min + 1) + min).toString().padStart(4, '0');
};

const getCategoryCode = (text: string): string => {
  // Map Korean to English letters (you can expand this mapping as needed)
  const koreanToEnglishMap: Record<string, string> = {
    '골드': 'G',
    '실버': 'S',
    '아트 컬렉션': 'A'
  };

  // Split the text into words, translate to English, and capitalize the first letter of each word
  return text
    .split(' ')
    .map((word) => koreanToEnglishMap[word] || word)
    .join('');
};

const generateFakeOrderNumber = (product: { id?: string; name?: string; category: any; price?: string; brand?: string; thumbnail?: string; ordercount?: number; regDate?: string; }) => {
  // Translate the first letter of the category and the first letter of each word in the product name to English
  const translatedCategory = getCategoryCode(product.category);
 

  // Generate a random number from 0000 to 1000
  const randomNumber = generateRandomNumber(0, 1000);

  // Combine the translated and capitalized category, product name, and random number to create the order number
  const orderNumber = `${translatedCategory.charAt(0)}${randomNumber}`;
  
  return orderNumber;
};

// Usage: Generate a fake order number for the provided product
const product = {
  id: '151',
  name: '한국조폐공사 오롯 골드바 10g',
  category: '골드',
  price: '934000',
  brand: '한국조폐공사',
  thumbnail: 'http://www.koreasilverex.co.kr/shopimages/ksilverex/006002000002.jpg',
  ordercount: 515,
  regDate: '2020-02-25 23:53:40'
};

export function convertToYearMonth(dateString: string): string {
  const date = new Date(dateString);
  
  const year = date.getFullYear();
  const monthOptions: Intl.DateTimeFormatOptions = { month: 'long', timeZone: 'UTC' };
  const month = new Intl.DateTimeFormat('ko-KR', monthOptions).format(date);
  
  return ` ${year} ${month}`;
}


export function truncateToHundredsPlace(number : number) {
  const hundreds = Math.floor(number / 100) * 100;
  return hundreds;
}