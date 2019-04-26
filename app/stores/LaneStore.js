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

    attachToLane({laneId, topicID}) {
        this.setState({
          lanes: this.lanes.map(lane => {
            if(lane.topics.includes(topicID)) {
              lane.topics = lane.topics.filter(topic => topic !== topicID);
            }
    
            if(lane.id === laneId) {
              lane.topics= lane.topics.concat([topicID]);
            }
    
            return lane;
          })
        });
      }

      detachFromLane({laneId, topicID}) {
          this.setState({
              lanes: this.lanes.map(lane => {
                  if(lane.id === laneId) {
                      lane.topics = lane.topics.filter(topic => topic !== topicID);
                  }
                return lane;
              })
          })
      }
}