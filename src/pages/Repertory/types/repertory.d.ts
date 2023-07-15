import { ItemResponseDTO, Page } from '../../../types';

interface PageRepertory extends Page {
  content: Array<ItemResponseDTO>
} 
