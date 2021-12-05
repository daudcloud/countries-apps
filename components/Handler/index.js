import Input from "../Input";
import Region from "../Region";
import Div from "./style";

const Handler = ({ value, onChange, region, setRegion }) => {
  return (
    <Div>
      <Input value={value} onChange={onChange} />
      <Region region={region} setRegion={setRegion} />
    </Div>
  );
};

export default Handler;
