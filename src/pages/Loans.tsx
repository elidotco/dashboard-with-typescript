import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import { IoIosGitBranch } from 'react-icons/io';
import TableThree from '../components/Tables/TableThree';

const Loans = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Branches" />

      {/* <!-- ====== Loans Section Start ====== --> */}
      <Link
        to="#"
        className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mb-10"
      >
        <IoIosGitBranch size={24} />
        New Branch
      </Link>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <TableThree name="Active Branches" />
      </div>
      <div className="w-full max-w-full rounded-sm border mt-10 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <TableThree name="InActive Branches" />
      </div>
      {/* <!-- ====== Loans Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Loans;
