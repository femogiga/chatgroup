import { useQuery, useMutation } from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useChatData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['chatData'],
    queryFn: () => apiService.get('/chats').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useReformedData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['reformedChatData'],
    queryFn: () => apiService.get('/chats/groupedbyDate').then((res) => res.data),
  });
  return { isPending, error, data };
};
