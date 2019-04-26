import LaneActions from '../actions/LaneActions';

export default class LaneStore {
    constructor() {
        this.bindActions(LaneActions);
        this.lanes = [];
    }
    create(lane) {
        lane.topics = lane.topics || [];

        this.setState({
            lanes: this.lanes.concat(lane)
        });
    }
}