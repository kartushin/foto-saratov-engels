import { animateScroll as scroll } from 'react-scroll';
import './points.css';

function ServiceItem({ service, addservice }) {
  return (
    <div className="text-black text-md pb-4">
      <p className="points">
        <span>{service}</span>
        <span>{addservice}</span>
      </p>
    </div>
  );
}

function scrollToBottom() {
  scroll.scrollToBottom();
}

function PriceListItem({
  servicename,
  serviceone,
  addserviceone,
  servicetwo,
  addservicetwo,
  servicethree,
  addservicethree,
  servicefour,
  addservicefour,
  cost,
}) {
  return (
    <div className="md:w-1/4 grow item border-4 border-black m-4">
      <div className="info p-4">
        <div className="grid place-content-around text-black font-bold text-xl pt-2 pb-4">
          {servicename}
        </div>
        <ServiceItem addservice={addserviceone} service={serviceone} />
        <ServiceItem addservice={addservicetwo} service={servicetwo} />
        <ServiceItem addservice={addservicethree} service={servicethree} />
        <ServiceItem addservice={addservicefour} service={servicefour} />
        <div className="grid place-content-around text-black font-bold text-xm pb-4">
          <span>{cost}руб</span>
        </div>
        <div className="md:w-full text-center">
          <button
            className="py-2 px-4 rounded border-2 border-black text-xl text-center justify-self-end hover:bg-black hover:text-white"
            type="button"
            onClick={scrollToBottom}
          >
            <p className="mx-4">Записаться</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PriceListItem;
