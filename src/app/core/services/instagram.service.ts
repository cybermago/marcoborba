import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor() { }

}

export async function fetchInstagramImages(accessToken: string) {
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${accessToken}`;
  const response = await axios.get(url);
  return response.data.data; // Retorna a lista de imagens
}