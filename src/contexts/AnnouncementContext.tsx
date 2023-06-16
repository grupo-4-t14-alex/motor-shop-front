import { ReactNode, createContext, useState, useContext } from "react";
import { Toast, useToast } from "@chakra-ui/react";
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
  CreateAnnouncement: (data: IcreateAnnounce) => void;
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
}
export const AnnouncementContext = createContext<AnnouncementContextValues>(
  {} as AnnouncementContextValues
);

export const AnnouncementProvider = ({
  children,
}: AnnouncementProviderProps) => {
  const { updatePage, setUpdatePage } = useContext(ProductContext);
  const toast = useToast();
  const CreateAnnouncement = async (data: IcreateAnnounce) => {
    data.year = Number(model?.year!);
    data.fipePrice = model?.value!;
    data.fuel = model?.fuel!;
    data.sellPrice = Number(data.sellPrice);
    data.km = Number(data.km);

    try {
      const token = localStorage.getItem("motors-shop:token");
      await api.post("/cars", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Toast({
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

  const onError = (errors: any, e: any) => console.log(errors, e);
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
