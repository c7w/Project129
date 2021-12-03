
interface Question {
    question: string;
    options: Array<Option>;
}

interface Option {
    option: string;
    next: (curr: ScoreSheet) => ScoreSheet;
}

interface ScoreSheet {
    Class1: number;
    Class2: number;
    next: number;
};

const QUESTIONS : Array<Question>= [
    {
        question: "1935年，国共内战不息，日军加快侵华步伐，中华民族深陷内忧外患之中。此刻的你正在：",
        options: [
            {
                option: "广泛阅读清华周刊等时政刊物",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 + 1, Class2: curr.Class2, next: 2}
                }
            },
            {
                option: "积极参与救国会等群众性运动组织",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 + 1, Class2: curr.Class2, next: 2}
                }
            },
            {
                option: "刻苦刷题，努力完成老师布置的诸多作业",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 - 1, Class2: curr.Class2, next: 2}
                }
            },
            {
                option: "和导师交流讨论，思考自己未来的生涯规划",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 - 1, Class2: curr.Class2, next: 2}
                }
            },
        ]
    }, // TODO: Add 6 more questions!
	{
        question: "同学们正在讨论一篇批冀察政务委员会的社评《勿自促国家之分裂》。社评作者认为冀察政务委员会是对日妥协的伪政权机构。你：",
        options: [
            {
                option: "感兴趣，希望了解详细情况",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 + 1, Class2: curr.Class2, next: 3}
                }
            },
            {
                option: "感觉与自己关系并不大，还是努力学习最重要",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 - 1, Class2: curr.Class2, next: 3}
                }
            },
            {
                option: "非常关注这件事，决定加入讨论",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 + 1, Class2: curr.Class2, next: 3}
                }
            },
        ]
    },
	{
        question: "北平学联成员正在派发传单，号召同学进行游行请愿，反对一切伪组织、伪自治。你：",
        options: [
            {
                option: "马上去上课了，下次再看！",
                next: (curr: ScoreSheet)=> {
					const next = curr.Class1-1> 0 ? (4) : (6)
                    return { Class1: curr.Class1 - 1, Class2: curr.Class2, next }
                }
            },
            {
                option: "希望出一份力，帮忙派发传单",
                next: (curr: ScoreSheet)=> {
					const next=curr.Class1+1 > 0 ? (4) : (6)
                    return { Class1: curr.Class1 + 1, Class2: curr.Class2, next}
                }
            },
            {
                option: "急着参加社团活动，直接离开了",
                next: (curr: ScoreSheet)=> {
					const next=curr.Class1-1 > 0 ? (4) : (6)
                    return { Class1: curr.Class1 - 1, Class2: curr.Class2, next}
                }
            },
            {
                option: "收下传单，认真阅读",
                next: (curr: ScoreSheet)=> {
					const next=curr.Class1+1 > 0 ? (4) : (6)
                    return { Class1: curr.Class1 + 1, Class2: curr.Class2,  next}
                }
            },
        ]
    },
	{
        question: "1935年12月9日，数千学生涌上北平街头，举行抗日救国示威游行。此时：",
        options: [
            {
                option: "你创作的宣传语被印在条幅和报刊上",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2+2, next: 5}
                }
            },
            {
                option: "你正走在队伍最前端，手持喇叭高声呼喊",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2-2, next: 5}
                }
            },
            {
                option: "你听从学联为你布置的任务，走在游行队伍当中",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2, next: 105}
                }
            },
        ]
    },
	{
        question: "“一二·九”运动落幕，校方和老师着手组织恢复教学，否则会对学生进行退学处理。你的态度是：",
        options: [
            {
                option: "目标没有实现，坚持停课，抗争到底 ",
                next: (curr: ScoreSheet)=> {
					const next=curr.Class2-1 > 0 ? (101) : ( 102)
                    return { Class1: curr.Class1 , Class2: curr.Class2-1, next}
                }
            },
            {
                option: "学生以学业为重，先恢复教学，用知识武装头脑",
                next: (curr: ScoreSheet)=> {
					const next=curr.Class2 +1> 0 ? (101) : ( 102)
                    return { Class1: curr.Class1 , Class2: curr.Class2+1, next}
                }
            },
            {
                option: "犹豫不决，打算跟随大多数的观点",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2, next: 105}
                }
            },
        ]
    },
	{
        question: "“一二·九”期间你目睹了很多事，对中国的社会现实有了更深入的了解。其中你印象最深刻的是：",
        options: [
            {
                option: "军警暴力镇压学生运动，致使数百人受伤",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2+1, next: 7}
                }
            },
            {
                option: "部分市民吃瓜观望，看客行为令人痛心",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2-1, next: 7}
                }
            },
            {
                option: "具体细节印象不深了",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2, next: 105}
                }
            },
        ]
    },
	{
        question: "“一二·九”运动对你产生极大触动，深深影响了你未来的职业规划，你决定：",
        options: [
            {
                option: "深耕学术，用知识缝制铠甲将来披甲上阵",
                next: (curr: ScoreSheet)=> {
					const next=curr.Class2-2 > 0 ? ( 103) : ( 104)
                    return { Class1: curr.Class1 , Class2: curr.Class2-2, next}
                }
            },
            {
                option: "投笔从戎，以一腔少年热血护中华国泰民安",
                next: (curr: ScoreSheet)=> {
					const next=curr.Class2+2 > 0 ? ( 103) : ( 104)
                    return { Class1: curr.Class1 , Class2: curr.Class2+2, next}
                }
            },
            {
                option: "尚不明确，努力锻炼，为祖国健康工作五十年",
                next: (curr: ScoreSheet)=> {
                    return { Class1: curr.Class1 , Class2: curr.Class2, next: 105}
                }
            },
        ]
    },
];

export type {Question, Option, ScoreSheet};
export default QUESTIONS;