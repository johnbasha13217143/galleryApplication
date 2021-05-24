export interface Common {
  userName: string;
  password: string;
}
export interface Gallery {
  id: number;
  name: string;
  imageUrl: string;
}

export function mapGalleryProducts(data: any): Gallery {
  return {
    id: data.id,
    name: data.name,
    imageUrl: data.image_src
  }
}
export function mapUserDetails(data: any): Common {
  return {
    userName: data.userId,
    password: data.password
  }
}