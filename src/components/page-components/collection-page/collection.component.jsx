import { connect } from 'react-redux';
import { selectCollection } from '../../../redux/shop/shop-selector';
import CollectionItem from '../../collection-preview/collection-item/collection-item.component';
import './collection.styles.scss'


const CollectionPage = ({ collection }) => {
   const {title,items} = collection

    return (
        <div className="collection-page">
            <h2>
          {title}
            </h2>
            <div className="items">
                {
                    items.map(item => {
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({

    collection: selectCollection(ownProps.match.params.collectionId,)(state)

})



export default connect(mapStateToProps)(CollectionPage);