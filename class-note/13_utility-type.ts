interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오는 api
function fetchProducts(): Promise<Product[]> {}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// Product 에서 필요한거만 뽑아서 쓸수 잇게 Pick
// ProductDetail interface가 필요 없음

// 2. 특정 상품의 상세 정보
function dispalyProductDetail(
  shoppingItem: Pick<Product, 'id' | 'name' | 'price'>
) {}

// Partial<Product> 와 동일함
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>;

// 3. 특정 상품의 정보 업데이트
function updateProductItem(productItem: UpdateProduct) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string
//     email?: string
//     profilePhotoUrl?: string
// }
// #1
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

// #2 맵드 타입
type UserProfileUpdate = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};
type UserProfileKeys = keyof UserProfile;

// #3
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// Pick은 뽑는거, Omit은 제거
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: 'ㅎㅎ',
  phone: 123,
  company: '방',
};

const phoneBook2: Omit<AddressBook, 'address' | 'company'> = {
  name: 'ㅎㅎ',
  phone: 123,
};
