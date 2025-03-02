
import http from '@/lib/axios';
import { Paramtypes } from '@/lib/types/param';
import constants from '@/lib/constant/url-constants';
import { ChapterResponse, ChaptetType, CreatedChapterResponse } from '@/lib/types/chapter';


export const chapterService = {
  getChapters: async (param: Paramtypes) => {
    const response = await http.get<ChapterResponse>(constants.CHAPTER_URL,{params:param});
    return response.data;
  },
  saveChapter: async (chapter: ChaptetType) => {
    const response = await http.post<CreatedChapterResponse>(constants.CHAPTER_URL,chapter);
    return response.data;
  },
};
