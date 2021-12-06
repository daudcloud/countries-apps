import Input from "../Input";
import Region from "../Region";
import Div from "./style";

const Handler = ({ value, onChange, region, setRegion }) => {
  return (
    <Div>
      <div className="container">
        <Input value={value} onChange={onChange} />
        <Region region={region} setRegion={setRegion} />
      </div>
    </Div>
  );
};

export default Handler;
