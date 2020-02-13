import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div>
                {collections.map(({id,...otherCollectionProps}) =>
                        <CollectionPreview id={id} {...otherCollectionProps}/>
                    )
                }
            </div>
        );
    }
}

export default ShopPage;