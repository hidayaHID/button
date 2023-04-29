public  one int[]
eliminateDuplicates(int[] list ){
      int[] result=new int{list.length};
      int size =0;
      for (int w =0;w<list.lengh;w++;){boolean duplicate =false;
      for(int z=0;z<size;z++){if (list[w]==result[z]){dublicte=true;
      break;}}
      if(!dublicate){
            result[size]=list[w];size++;}

      }
      int[] distinct=new int[size];
      for(int w=0;w<size;w++){distinct[w=result[w];]}
      }
      return distict;}