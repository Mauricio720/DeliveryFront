import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../services/Api';
import * as Style from './style';
import {Sale} from '../../types/Sales';
import {ProductCartItem} from '../../types/ProductCartItem'
import ItemsSale from './ItemsSale';
import AddressItem from '../User/AddressItem';
import { Address } from '../../types/Address';
import LoadingSpin from 'react-loading-spin';

export default ()=>{
    const params=useParams();
    const [sale,setSale]=useState<Sale>();
    const [itemsSale,setItemsSale]=useState<ProductCartItem[]>([]);
    const [address,setAddress]=useState<Address>();
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        getSalesAndItems();
    },[]);

    const getSalesAndItems=async ()=>{
        setLoading(true);
        let response=await Api.getSale(parseInt(params.order as string));
        
        if(response.error===''){
            setSale(response.sale);
            setAddress(response.sale.address);
            
            response=await Api.getItemsSale(response.sale.id);
            setItemsSale(response.itemsSale);
            setLoading(false);
        }
    }
    
    return (
        <Style.Container>
            <Style.Title>Informação sobre o pedido</Style.Title>
            
            <Style.ContainerSaleInfo>
                {loading &&
                    <LoadingSpin size="35px" primaryColor='blue' />
                }

                {loading===false &&
                    <Style.SaleArea>
                        <Style.Title>Informação da Venda</Style.Title>
                        <Style.InfoSale>
                            Data: 15/01/2022 
                        </Style.InfoSale>

                        <Style.InfoSale>
                            Subtotal: R$ {sale?.sub_total} 
                        </Style.InfoSale>

                        <Style.InfoSale>
                            Total: R$ {sale?.total}
                        </Style.InfoSale>

                        <Style.InfoSale>
                            Observação: {sale?.observation}
                        </Style.InfoSale>
                    </Style.SaleArea>
                }

                {loading===false &&
                    <Style.ItemsContainer>
                        <Style.Title>Items Vendidos</Style.Title>
                        {itemsSale.map((item)=>(
                            <ItemsSale key={item.id} item={item}/>
                        ))}
                    </Style.ItemsContainer>
                    }
            </Style.ContainerSaleInfo>
                    
            {loading===false &&
                <>
                    <Style.Title>Endereço de Entrega</Style.Title>
                    <Style.ContainerAddress>
                        <AddressItem
                            address={address}
                        />
                    </Style.ContainerAddress>
                </>
            }
        </Style.Container>
    )
}