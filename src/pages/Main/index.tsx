import Header from "../Header";
import MainRoutes from "../MainRoutes";
import * as Style from './style';

export default ()=>{
    return (
        <Style.Container>
            <Header/>
            <Style.PageContainer>
                <MainRoutes/>
            </Style.PageContainer>
        </Style.Container>
    )
}