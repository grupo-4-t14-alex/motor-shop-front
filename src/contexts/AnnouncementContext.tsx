import { ReactNode, createContext, useState, useContext } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import {
  Car2,
  CarData,
  IcreateAnnounce,
} from "../components/formCreateAnnouncement/validators";
import api from "../services/api";
import { ProductContext } from "./ProductsContext";

interface AnnouncementProviderProps {
  children: ReactNode;
}

interface AnnouncementContextValues {
  CreateAnnouncement: (data: IcreateAnnounce, banner: File, files: Array<File>) => void;
  onError: (errors: any, e: any) => void;
  resApiForm: CarData;
  setResApiForm: React.Dispatch<React.SetStateAction<CarData>>;
  resApiForm2: Car2[];
  setResApiForm2: React.Dispatch<React.SetStateAction<Car2[]>>;
  marca: string;
  setMarca: React.Dispatch<React.SetStateAction<string>>;
  model: Car2 | undefined;
  setModel: React.Dispatch<React.SetStateAction<Car2 | undefined>>;
  arrayFuel: string[];
  handlerBrand: (value: string) => void;
  handlerModel: (value: string) => void;
  ops1: string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const AnnouncementContext = createContext<AnnouncementContextValues>(
  {} as AnnouncementContextValues
);

export const AnnouncementProvider = ({
  children,
}: AnnouncementProviderProps) => {
  const { updatePage, setUpdatePage } = useContext(ProductContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const toast = useToast();

  const CreateAnnouncement = async (data: IcreateAnnounce, banner: File, files: Array<File>) => {
    console.log(files)
    data.year = Number(model?.year!);
    data.fipePrice = model?.value!;
    data.fuel = model?.fuel!;
    data.sellPrice = Number(data.sellPrice);
    data.km = Number(data.km);

    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const token = localStorage.getItem("motors-shop:token");
      const response = await api.post("/cars", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      const fd = new FormData()
      
      files.forEach((element: File) => {
          fd.append("photos", element)
      });
      
      fd.append("banner", banner)


      await api.post(`/import/${response.data.newCar.id}`, fd, config)
      onClose()
      toast({
        title: "Annoucement created",
        description: "We've created your Annoucement for you.",
        status: "success",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });

    } catch (error) {
      toast({
        title: "Try again later",
        description: "Try again later",
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setUpdatePage(!updatePage);
    }
  };

  const [resApiForm, setResApiForm] = useState({} as CarData);
  const [resApiForm2, setResApiForm2] = useState([] as Car2[]);
  const [marca, setMarca] = useState("" as string);
  const [model, setModel] = useState({} as Car2 | undefined);
  const arrayFuel = ["flex", "hibrido", "eletrico"];

  const onError = (errors: any, e: any) => {
    console.log(errors, e);
    const fields = Object.keys(errors).toString()


    toast({
      title: "fill in all required fields",
      description: `fields[${fields}]`,
      status: "error",
      position: "top-right",
      duration: 2000,
      isClosable: true,
    });
  }


  const handlerBrand = async (value: string) => {
    setMarca(value);
  };

  const handlerModel = async (value: string) => {
    setModel(resApiForm2.find((elem) => elem.name == value));
  };

  const ops1 = Object.keys(resApiForm);

  return (
    <AnnouncementContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        ops1,
        handlerModel,
        handlerBrand,
        CreateAnnouncement,
        onError,
        resApiForm,
        setResApiForm,
        resApiForm2,
        setResApiForm2,
        marca,
        setMarca,
        model,
        setModel,
        arrayFuel,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
