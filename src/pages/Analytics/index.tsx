import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { AiOutlineExport } from 'react-icons/ai';
import ChartOne from '../../components/Charts/ChartOne';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChartThree from '../../components/Charts/ChartThree';

const Analytics = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Branches" />

      {/* <!-- ====== Analytics Section Start ====== --> */}
      <Link
        to="#"
        className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mb-10"
      >
        <AiOutlineExport size={24} />
        Export Report
      </Link>
      <Link
        to="#"
        className=" lg:mx-9 sm:mx-0 inline-flex items-center justify-center gap-2.5 bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mb-10"
      >
        <AiOutlineExport size={24} />
        GCSCA Report
      </Link>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"></div>
      <div className="w-full max-w-full rounded-sm border mt-10 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"></div>
      <ChartOne />
      <div className="my-10">
        <ChartTwo />
      </div>
      <ChartThree name="Transaction Types" />
      {/* <!-- ====== Analytics Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Analytics;


