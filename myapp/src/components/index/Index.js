import React from 'react'
import './Index.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Nav from './Nav'

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'历史背景',
            arr:[],
            arr1:[],
            arr2:[],
        };
        this.onRef=this.onRef.bind(this)
    }
    onRef(ref){
        // console.log(this);
        this.child=ref
    }
    handleChange(obj,num){
        if (obj==='历史背景') {
            this.props.history.push('/index')
        }
       this.setState({
           value:obj
       });
       if (num===0){
           this.setState({
              arr:['漩涡鸣人','宇智波佐助','旗木卡卡西','日向雏田','春野樱','日向宁次','宇智波鼬','宇智波斑','宇智波带土','猿飞日斩','大蛇丸','自来也','纲手'],
              arr1:['http://192.168.1.3:3000/images/people/nanuto.jpeg','http://192.168.1.3:3000/images/people/sasigei.jpeg','http://192.168.1.3:3000/images/people/kakaxi.jpeg','http://192.168.1.3:3000/images/people/chutian.jpeg','http://192.168.1.3:3000/images/people/sakura.jpeg'],
               arr2:['漩涡鸣人，日本漫画《火影忍者》及其衍生作品中的男主角。火之国木叶隐村的忍者，四代目火影波风水门和漩涡玖辛奈之子，六道仙人次子阿修罗转世。刚出生时父母为保护村子而牺牲，并将尾兽“九尾”封印在鸣人体内。成为孤儿的鸣人从小被村民歧视，但在唯一认同他的老师海野伊鲁卡以及三代目火影猿飞日斩的鼓励下有了要成为火影的梦想，让所有人都认同他的存在。成为忍者后，和旗木卡卡西、宇智波佐助以及春野樱组成第七班进行各种任务。&为实现梦想，和守护伙伴们的羁绊，鸣人不断修炼变强，作为木叶“三忍”之一自来也的弟子，在追求梦想的过程中不断突破自我，贯彻了自身的忍道，获得人们的认可。最后与忍者联军以及宇智波佐助还有九尾一同终结了战争，为忍者世界带来和平，并实现自己成为火影（七代目火影）和忍界英雄的梦想。','宇智波佐助，日本漫画《火影忍者》及其衍生作品中的角色。火之国木叶隐村宇智波一族的天才忍者，六道仙人长子因陀罗的转世者。&年幼时因目睹宇智波一族被哥哥鼬所歼灭，从而走上复仇之路。在终末之谷与漩涡鸣人展开激战，将鸣人打败后叛离木叶前去追随大蛇丸。三年后，佐助将大蛇丸吸收到异空间，并成功打败宇智波鼬，但从带土口中得知了宇智波鼬的灭族真相，于是决定摧毁木叶。&后来，佐助与秽土后的鼬相遇并协助鼬打败药师兜，因为鼬的话而思想产生了波动，因此，佐助的想法再次发生了变化，为了进一步了解忍者、家族、哥哥的过去，佐助复活大蛇丸，并与秽土后的四位火影进行交谈，在听完他们的回答后决定继承鼬的意志守护木叶，并希望成为火影改变木叶的政治体制。&第四次忍界大战结束后，佐助因对于维护世界和平的道路选择和鸣人不同，而在终结之谷与鸣人进行了最后一战，结果两人各断一条手臂。最终佐助被鸣人感化，认同了鸣人的道路，终于回归木叶，并重新成为木叶的一员。&此后佐助独自一人环游忍界，暗中默默地守护着木叶。','旗木卡卡西，日本漫画《火影忍者》及其衍生作品中的男性角色。火之国木叶隐村的精英上忍，原木叶暗部成员，四代目火影波风水门的弟子，第七班队长，漩涡鸣人、宇智波佐助、春野樱的老师。年仅12岁就成为上忍的天才忍者，后左眼移植宇智波带土的写轮眼，因使用写轮眼复制了上千种忍术而被称为“拷贝忍者”、“写轮眼卡卡西”，其名号响彻各国。&第四次忍界大战中，写轮眼不幸被宇智波斑夺去，所幸被鸣人使用阴阳遁将左眼复原。带土临死前通过查克拉将写轮眼再次赋予卡卡西而可以短暂使用完整的万花筒写轮眼力量，能够开启完全体须佐能乎，并借此在最终决战与第七班三位弟子一起将大筒木辉夜封印。战争结束后成为了六代目火影，数年后卸任，由鸣人当第七代火影，和迈特凯两人启程旅行，去寻找曾经的回忆。','日向雏田，日本漫画《火影忍者》及其衍生作品中的女性角色，火之国木叶隐村的忍者，木叶名门日向一族宗家的嫡长女，大筒木羽村的后代之一，拥有纯度极高的白眼，被舍人和大筒木一族的亡魂们称为“白眼的公主”。&从小喜欢主角漩涡鸣人。原本是个性格柔弱的女孩，但是在鸣人的影响下性格逐渐变得坚强，并渐渐成长为一名优秀的女忍者。故事最后成为鸣人的妻子，并育有一子一女','春野樱，日本漫画《火影忍者》及其衍生作品中的女主角。新一代医疗忍者，五代目火影纲手的弟子，与漩涡鸣人、宇智波佐助隶属于旗木卡卡西领导的第七班。&原本性格柔弱任性，在木叶忍者学校笔试成绩不错。在佐助叛离木叶村后，拜第五代火影纲手为师，学会优秀的体术，怪力和医疗第四次忍界大战中作为忍者联军第三部队以及医疗后勤部队的一员。&具有良好的查克拉控制能力与清晰的头脑，擅长体术怪力与医疗忍术以及解除幻术（拥有幻术天赋，早期设定是幻术型忍者）。经过自己艰苦卓绝的努力奋斗，最终成长为一个贯彻自己座右铭“勇气”的优秀忍者。&忍界大战结束若干年后，长大后的樱已经成为木叶高层干部的上忍，并与佐助结婚，改名为宇智波樱，佐助与樱育有一女：宇智波佐良娜']
           });
           this.child.setState({
               left:true
           })
       }else if (num===1){
           this.setState({
               arr:['第  一  天  团','火之国','水之国','雷之国','土之国','风之国']
           });
           this.child.setState({
               left:true
           })
       }
    }
    render(){
        return(
            <div id='index'>
                <Nav history={this.props.history} arr={this.state.arr} arr1={this.state.arr1} arr2={this.state.arr2} onRef={this.onRef}/>
                <BottomNavigation value={this.state.value}>
                    <BottomNavigationAction onClick={this.handleChange.bind(this,'历史背景')} label="历史背景" value="历史背景" icon={<RestoreIcon />} />
                    <BottomNavigationAction onClick={this.handleChange.bind(this,'人物介绍',0)} label="人物介绍" value="人物介绍" icon={<FavoriteIcon />} />
                    <BottomNavigationAction onClick={this.handleChange.bind(this,'势力介绍',1)} label="势力介绍" value="势力介绍" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}
export default Index