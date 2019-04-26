import storage from '../../libs/storage';
import persist from '../../libs/persist'
import TopicStore from '../../stores/TopicStore';
import LaneStore from '../../stores/LaneStore';

export default alt => {
    alt.addStore('TopicStore', TopicStore);
    alt.addStore('LanesStore', LaneStore);

    persist(alt, storage(localStorage), 'app');
}