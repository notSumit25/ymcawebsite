import Landing from "../../components/DepartmentPageComponents/Landing";
import Description from "../../components/DepartmentPageComponents/Description";
import QuickLinks from "../../components/common/QuickLinks";
import DepartmentChairperson from "../../components/DepartmentPageComponents/DepartmentChairperson";

const DepartmentPage = () => {
    return (
        <div>
            <Landing/>
            <div className={'flex flex-col'}>
                <div className={'mt-12 ml-8 space-y-8 flex'}>
                    <DepartmentChairperson/>
                </div>
                <div className={'flex mt-8'}>
                    <Description/>
                </div>

            </div>
        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}

export default DepartmentPage;