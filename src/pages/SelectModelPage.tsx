import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { routerPath } from "@/routes";
import { selectedCarInfoState } from "@/stores";
import { getCarInfo } from "@/apis/api";

export const SelectModelPage = () => {
  const { carCode } = useParams();
  const [carInfo, setCarInfo] = useRecoilState(selectedCarInfoState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (carCode !== undefined) {
        try {
          const data = await getCarInfo(carCode);
          setCarInfo({
            code: data.carCode,
            name: data.carName,
          });
        } catch (error) {
          navigate(routerPath.ROOT);
        }
      }
    };
    fetchData();
  }, [carCode]);

  return (
    <div>
      <h2>차량 모델 선택 페이지</h2>
      <h3>차량 코드: {carInfo.code}</h3>
      <h3>차량 이름: {carInfo.name}</h3>
    </div>
  );
};
