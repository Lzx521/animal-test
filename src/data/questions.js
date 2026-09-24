// 维度定义（野生名 + 大五人格对照）
export const dimensions = [
  {
    id: 'procrastination',
    name: '摸鱼の段位',
    icon: '🐟',
    bigFive: '尽责性',
    bigFiveEn: 'Conscientiousness',
    bigFiveNote: '摸鱼分越高，越像「尽责性偏低」的野生表达'
  },
  {
    id: 'attention',
    name: '会议室显眼包指数',
    icon: '🎯',
    bigFive: '外向性',
    bigFiveEn: 'Extraversion',
    bigFiveNote: '显眼分越高，越像外向性偏高'
  },
  {
    id: 'rebuttal',
    name: '怼人技能冷却时间',
    icon: '🗡️',
    bigFive: '宜人性',
    bigFiveEn: 'Agreeableness',
    bigFiveNote: '怼人分越高，越像「宜人性偏低」的野生表达'
  },
  {
    id: 'drama',
    name: '内心戏院排片密度',
    icon: '🎬',
    bigFive: '神经质',
    bigFiveEn: 'Neuroticism',
    bigFiveNote: '内心戏分越高，越像神经质偏高'
  },
  {
    id: 'creativity',
    name: '脑洞漏风系数',
    icon: '💡',
    bigFive: '开放性',
    bigFiveEn: 'Openness',
    bigFiveNote: '脑洞分越高，越像开放性偏高'
  }
]

// 30道题完整数据（原创SBTI生活版 · 优化版）
// 评分档位：1 / 3 / 5（低 / 中 / 高），每维度6题满分30
export const MAX_DIMENSION_SCORE = 30
export const questions = [
  // ========== 摸鱼の段位（6题） ==========
  {
    id: 1,
    dimension: 'procrastination',
    text: '工作文档已经打开，光标在第一行闪。你的下一秒是？',
    options: [
      { text: '先去倒水、回消息、把桌面图标对齐，文档还停在标题。', score: 5 },
      { text: '写了两行，又去查了一个跟任务无关的词。', score: 3 },
      { text: '直接往下写，水杯等这段写完再倒。', score: 1 }
    ]
  },
  {
    id: 2,
    dimension: 'procrastination',
    text: '周日晚上11点，你想起明天要交的东西一个字没动，你会？',
    options: [
      { text: '打开文档，打上标题，然后去洗了个澡、吃了碗面、刷了半小时手机。', score: 5 },
      { text: '花两小时搭了个完美框架，然后心满意足地关掉电脑。', score: 3 },
      { text: '直接关掉手机开始写，凌晨两点把初稿交了出来。', score: 1 }
    ]
  },
  {
    id: 3,
    dimension: 'procrastination',
    text: '如果“拖延”是一种超能力，你觉得你的能力是？',
    options: [
      { text: '时间静止——只要我不开始，deadline就追不上我。', score: 5 },
      { text: '分身术——同时开八个任务，每个都只做了1%。', score: 3 },
      { text: '意念控制——想到什么立刻去做，根本不给拖延留机会。', score: 1 }
    ]
  },
  {
    id: 4,
    dimension: 'procrastination',
    text: '周五下午四点，周一要交的东西还是空白。你会？',
    options: [
      { text: '合上电脑，告诉自己周末灵感更好，周一早上再战。', score: 5 },
      { text: '列了个提纲，然后心安理得地关机。', score: 3 },
      { text: '当天下午就把初稿交了。', score: 1 }
    ]
  },
  {
    id: 5,
    dimension: 'procrastination',
    text: '昨晚你跟自己说好：今天早起把方案写了。闹钟一响，你会？',
    options: [
      { text: '关掉闹钟，把约定顺手改到明天。', score: 5 },
      { text: '坐起来刷了二十分钟手机，说是在找状态。', score: 3 },
      { text: '爬起来打开文档，写到早饭前。', score: 1 }
    ]
  },
  {
    id: 6,
    dimension: 'procrastination',
    text: '你躺在床上刷手机，突然发现已经凌晨2点了，明天还要上班。你会？',
    options: [
      { text: '再刷5分钟就睡——然后刷到3点。', score: 5 },
      { text: '开始焦虑，但手还在继续刷。', score: 3 },
      { text: '直接关掉手机，闭眼硬睡。', score: 1 }
    ]
  },

  // ========== 会议室显眼包指数（6题） ==========
  {
    id: 7,
    dimension: 'attention',
    text: '新同事入职第一天，中午大家一起吃饭，你会？',
    options: [
      { text: '主动开话题：“你之前在哪家呀？”顺便把全组八卦都介绍了一遍。', score: 5 },
      { text: '有人问就接话，没人问就安静吃饭。', score: 3 },
      { text: '低头吃饭，心想“认识一个新人好累”。', score: 1 }
    ]
  },
  {
    id: 8,
    dimension: 'attention',
    text: '朋友聚会，全场突然安静了3秒，你会？',
    options: [
      { text: '立刻抛出一个话题，哪怕是自己都觉得无聊的话题。', score: 5 },
      { text: '心里有一万个话题，但嘴像被502粘住了。', score: 3 },
      { text: '低头玩手机，假装没注意到安静。', score: 1 }
    ]
  },
  {
    id: 9,
    dimension: 'attention',
    text: '你被拉进一个全是陌生人的群，群主说“大家自我介绍一下吧”。你的第一反应是？',
    options: [
      { text: '第一个发自我介绍，还配了表情包。', score: 5 },
      { text: '等别人先发，自己跟着格式抄。', score: 3 },
      { text: '装死，等这波过去。', score: 1 }
    ]
  },
  {
    id: 10,
    dimension: 'attention',
    text: '团建拍合影，领导喊“都往中间站！”。你？',
    options: [
      { text: '已经站在C位，还招呼同事：“来来来，这边光线好。”', score: 5 },
      { text: '被同事拉进中间，半推半就。', score: 3 },
      { text: '主动站到最边上，拍照时还侧了侧身。', score: 1 }
    ]
  },
  {
    id: 11,
    dimension: 'attention',
    text: '公司年会，你部门抽中了节目，需要3分钟单人展示。你会？',
    options: [
      { text: '报名！正好练了半年的吉他终于有听众了。', score: 5 },
      { text: '如果有人拉我一起就上，没有就安静看。', score: 3 },
      { text: '提前请假，说那天家里有事。', score: 1 }
    ]
  },
  {
    id: 12,
    dimension: 'attention',
    text: '聚会上你正默默吃菜，突然有人CUE你：“你怎么不说话呀？”你会——',
    options: [
      { text: '“我在听你们说呀。”', score: 3 },
      { text: '“我社恐。”', score: 1 },
      { text: '硬着头皮加入，然后说了一句冷场的话。', score: 5 }
    ]
  },

  // ========== 怼人技能冷却时间（6题） ==========
  {
    id: 13,
    dimension: 'rebuttal',
    text: '亲戚问你“工资多少啊？有对象了吗？什么时候结婚？”你会？',
    options: [
      { text: '“阿姨您退休金多少？您儿子买房了吗？”', score: 5 },
      { text: '“还行还行，您吃菜。”', score: 1 },
      { text: '笑着应付过去，晚上发了个仅自己可见的朋友圈：“过年主打一个礼貌性微笑。”', score: 3 }
    ]
  },
  {
    id: 14,
    dimension: 'rebuttal',
    text: '会上有人把你做的部分说成自己的，全组都在听。你会？',
    options: [
      { text: '当场补一句：“这段是我做的，纪要里写清楚。”', score: 5 },
      { text: '会后私下跟对方说一声，会上先没开口。', score: 3 },
      { text: '当场没说话，散会后越想越气。', score: 1 }
    ]
  },
  {
    id: 15,
    dimension: 'rebuttal',
    text: '你在网上看到一条评论：“现在的年轻人就是吃不了苦。”你会？',
    options: [
      { text: '“您那个年代的苦，现在年轻人吃的您也吃不了。”', score: 5 },
      { text: '划走，懒得吵。', score: 1 },
      { text: '截图发朋友群，一起骂。', score: 3 }
    ]
  },
  {
    id: 16,
    dimension: 'rebuttal',
    text: '同事在群里公开否定了你的方案，还补了一句“这谁写的”。你会？',
    options: [
      { text: '回个“行，我再改改”，这事就翻篇了。', score: 1 },
      { text: '私聊对方：“建议下次私聊说，群里讲不太好。”', score: 3 },
      { text: '当场回：“我写的。你要是有更好的，直接发一版。”', score: 5 }
    ]
  },
  {
    id: 17,
    dimension: 'rebuttal',
    text: '朋友借了你的钱，说“下周还”，结果三个月了还没动静。你会？',
    options: [
      { text: '直接发消息：“上次那个钱，方便转我一下吗？”', score: 5 },
      { text: '旁敲侧击：“最近手头紧不紧呀？”', score: 3 },
      { text: '算了，就当花钱认清一个人。', score: 1 }
    ]
  },
  {
    id: 18,
    dimension: 'rebuttal',
    text: '周五下班前，同事把不属于你的活丢过来：“帮个忙呗，就你最快。”你会？',
    options: [
      { text: '“这活不归我，你找负责人。”说完就去忙自己的。', score: 5 },
      { text: '“今天做不完，你问问别人吧。”', score: 3 },
      { text: '嘴上说“我很忙”，最后还是接下了。', score: 1 }
    ]
  },

  // ========== 内心戏院排片密度（6题） ==========
  {
    id: 19,
    dimension: 'drama',
    text: '老板说明天找你“聊一下最近的项目”，没说好坏。当晚你会？',
    options: [
      { text: '把背锅、调岗、被裁都想了一遍，觉没睡好。', score: 5 },
      { text: '心里咯噔一下，但告诉自己可能只是同步进度。', score: 3 },
      { text: '回了个“好”，然后该干嘛干嘛。', score: 1 }
    ]
  },
  {
    id: 20,
    dimension: 'drama',
    text: '你给朋友发了一条消息，2小时没回，你会？',
    options: [
      { text: '脑补了50集连续剧：ta是不是讨厌我？要不要撤回？——2小时后对方回“刚在忙”。', score: 5 },
      { text: '告诉自己“可能在忙”，每隔10分钟看一眼手机。', score: 3 },
      { text: '发完就忘了。2小时后对方回了，你才想起来自己发过。', score: 1 }
    ]
  },
  {
    id: 21,
    dimension: 'drama',
    text: '你半夜醒来，突然想起白天有人说了一句“你最近好像胖了”。你会？',
    options: [
      { text: '立刻打开手机搜“如何快速减肥”。', score: 5 },
      { text: '在心里默念“明天开始一定减肥”，然后继续睡。', score: 3 },
      { text: '翻个身继续睡，第二天就忘了。', score: 1 }
    ]
  },
  {
    id: 22,
    dimension: 'drama',
    text: '老板在群里发了一句“有些人最近状态不行啊”，没点名。你看到这条消息的时候，正在——',
    options: [
      { text: '立刻觉得说的就是自己，失眠到凌晨3点。', score: 5 },
      { text: '心里咯噔一下，但转念“应该不是我吧”。', score: 3 },
      { text: '完全无感，甚至在想中午吃什么。', score: 1 }
    ]
  },
  {
    id: 23,
    dimension: 'drama',
    text: '白天你在会上随口开了句玩笑，散会后没人再提。夜里你会？',
    options: [
      { text: '把那句话在脑子里重播，越想越觉得自己说错了。', score: 5 },
      { text: '闪过一下“会不会不妥”，然后刷手机把它盖过去。', score: 3 },
      { text: '完全想不起来自己说过什么。', score: 1 }
    ]
  },
  {
    id: 24,
    dimension: 'drama',
    text: '你发了一条朋友圈，过了半小时只有3个赞。你会？',
    options: [
      { text: '开始想：是不是内容太无聊了？要不要删了重发？', score: 5 },
      { text: '有点在意，但告诉自己“无所谓”。', score: 3 },
      { text: '根本没注意，发完就忘了。', score: 1 }
    ]
  },

  // ========== 脑洞漏风系数（6题） ==========
  {
    id: 25,
    dimension: 'creativity',
    text: '公司食堂本周五推出“神秘料理窗口”，食材随机、口味随机。你？',
    options: [
      { text: '必须试！随机才是惊喜，顺便猜猜今天抽到什么。', score: 5 },
      { text: '如果有人一起就去试试。', score: 3 },
      { text: '还是去熟悉的窗口打饭，稳妥。', score: 1 }
    ]
  },
  {
    id: 26,
    dimension: 'creativity',
    text: '朋友说“我最近在学冥想”，你会？',
    options: [
      { text: '问清楚怎么入门，当晚就下个 App 试了 10 分钟。', score: 5 },
      { text: '觉得有点意思，但告诉自己以后再说。', score: 3 },
      { text: '回了句「哦」，然后继续忙自己的。', score: 1 }
    ]
  },
  {
    id: 27,
    dimension: 'creativity',
    text: '需求评审卡住了，会议室一片沉默。你会？',
    options: [
      { text: '直接抛个全新方案，白板三笔画完，先不管靠不靠谱。', score: 5 },
      { text: '提一个小改动，先让会能往下开。', score: 3 },
      { text: '建议按老办法把时间压一压就行。', score: 1 }
    ]
  },
  {
    id: 28,
    dimension: 'creativity',
    text: '你走在路上，突然想到一个绝妙的点子，你会？',
    options: [
      { text: '立刻打开备忘录记下来，虽然之后再也没看过。', score: 5 },
      { text: '发到朋友群里，然后开始讨论。', score: 3 },
      { text: '算了，反正也不会去做。', score: 1 }
    ]
  },
  {
    id: 29,
    dimension: 'creativity',
    text: '如果公司允许你每周三在家办公，但条件是必须穿睡衣开会，你会？',
    options: [
      { text: '太好了！我马上买一套最丑的睡衣。', score: 5 },
      { text: '可以接受，反正摄像头只拍上半身。', score: 3 },
      { text: '算了，我还是去公司吧。', score: 1 }
    ]
  },
  {
    id: 30,
    dimension: 'creativity',
    text: '公司试行“奇装上班日”，每周五可以穿任何夸张服装上班。你会？',
    options: [
      { text: '穿全套皮卡丘上班，顺手把工位装饰成树屋。', score: 5 },
      { text: '穿一件花衬衫，意思一下。', score: 3 },
      { text: '当没看见通知，照常穿黑T恤。', score: 1 }
    ]
  }
]

/**
 * 固定出题顺序：按维度轮流各取一题，同一维度不会连着出现。
 * 顺序对所有人相同（不随机）。
 * 例：摸鱼1 → 显眼1 → 怼人1 → 内心戏1 → 脑洞1 → 摸鱼2 → …
 */
function interleaveByDimension(list, dimensionIds) {
  const buckets = Object.fromEntries(dimensionIds.map((id) => [id, []]))
  for (const q of list) {
    if (buckets[q.dimension]) buckets[q.dimension].push(q)
  }
  const ordered = []
  const maxLen = Math.max(0, ...dimensionIds.map((id) => buckets[id].length))
  for (let i = 0; i < maxLen; i++) {
    for (const id of dimensionIds) {
      if (buckets[id][i]) ordered.push(buckets[id][i])
    }
  }
  return ordered
}

export const orderedQuestions = interleaveByDimension(
  questions,
  dimensions.map((d) => d.id)
)

/**
 * 5 维人格 ↔ 5 种动物：闪电 / 孔雀 / 刺猬 / 兔子 / 章鱼哥
 * 10 种两维组合型（见 comboAnimals）：最高维与次高维差距 ≤ 4 分时触发
 * 多个维度并列最高 → 职场四不像
 * 单维文案池各 10 条、组合型各 8 条，结算时随机抽一条并锁定
 */
export const animalsByDimension = {
  procrastination: {
    id: 'flash',
    dimension: 'procrastination',
    name: '明天再说教主',
    emoji: '🦥',
    subtitle: '能躺绝不坐 · DDL 是第一生产力',
    fixedTag: '压哨绝杀选手',
    desc: '办事效率慢到极致，但人家在「人生 DMV」上班。能躺绝不坐——DDL 是第一生产力，你只是把提前完成改名叫压哨绝杀。',
    advice: '偶尔提前半步，世界不会因此塌方。',
    colleagueViews: [
      '「ta 看起来很闲，但活最后总能交……大概。」',
      '「别问进度，问就是还在「构思」。」',
      '「周五下午找 ta 不如找空气。」',
      '「催了三遍，回了个「马上」，然后世界安静了。」',
      '「文档创建时间很早，编辑时间永远在 deadline 前两小时。」',
      '「站会说「进行中」，进行的是什么只有天知道。」',
      '「ta 的日历空得像放假，语速稳得像闪电本闪。」',
      '「你催得越急，ta 眨眼睛的速度越慢。」',
      '「同事以为 ta 摸鱼，其实 ta 在等肾上腺素。」',
      '「交活前五分钟，气场突然从闪电切换成猎豹。」'
    ],
    suitedFors: [
      '能自己排期的长线活、深夜灵感改稿',
      '远程异步沟通、不急的优化类任务',
      '一个人安静扛活、避开连环催促',
      '有明确截止日但不微观管理的项目',
      '把「紧急」重新定义成「重要」的艺术活',
      '需要憋大招、一次性交付的输出',
      '周五之外的任何低干扰时段',
      '允许你按自己节奏推进的需求',
      '文档型、可断点续传的工作',
      '领导只看结果、不管过程的那种活'
    ],
    avoidMomentsList: [
      '早会连环追问进度、倒计时公屏播报',
      '「今天必须出」且没有缓冲',
      '被拉进「今日必达」小群还 @全体',
      '领导突然查屏、站会点名报百分数',
      '每小时同步一次状态的项目群',
      '「现在方便吗」连发五条语音',
      '截止时间写着 ASAP 的需求单',
      '早八站会报昨日精确到分钟',
      '被要求当场打开共享屏幕「演示进度」',
      '同事围观倒计时像看春晚跨年'
    ],
    quotes: [
      '「DDL 是第一生产力，你只是把「提前完成」改名叫「压哨绝杀」。」',
      '「稳住，我们能赢。」——先稳住不开始。',
      '「不疯魔，不成活。」——你的疯魔叫明天再说。',
      '「世界是你们的，也是我们的——但周五是躺平的。」',
      '「我不是拖延，我是把焦虑攒成套餐一次性释放。」',
      '「进度条 1% 也很诚实：至少证明你打开过。」',
      '「能拖到明天的事，绝不让今天的肝受罪。」',
      '「所谓高效，就是在 deadline 到来时突然觉醒。」',
      '「你不是懒，你是节能模式常驻。」',
      '「提前做完？那叫剧透，我不剧透。」'
    ]
  },
  attention: {
    id: 'peacock',
    dimension: 'attention',
    name: '空气都认识我',
    emoji: '🦚',
    subtitle: '哪里有 C 位哪里就有它 · 开会必须开屏',
    fixedTag: '摄像头已就位',
    desc: '哪里有 C 位哪里就有你。开会必须开屏，不然白来了——存在感是你的第二工牌。',
    advice: '偶尔把麦留给别人，聚光灯会更爱你。',
    colleagueViews: [
      '「ta 一进会议室，空气都热闹三分。」',
      '「不问问题都觉得少了点什么。」',
      '「团建自我介绍环节的隐藏 Boss。」',
      '「镜头一开，笑容比 PPT 先加载。」',
      '「沉默三秒，ta 就开始抛话题救场。」',
      '「工位上最显眼的不是屏幕，是 ta 的存在感。」',
      '「领导点名时，大家下意识先看 ta。」',
      '「冷场终结者本人，有时也是延长会议的原因。」',
      '「分享欲旺盛，分享内容质量看运气。」',
      '「你以为是开会，其实是 ta 的个人秀彩排。」'
    ],
    suitedFors: [
      '需要抛砖引玉的讨论、对外演示',
      '带新人破冰、复盘分享、跨组对齐',
      '路演答辩、把沉默会议救活',
      '需要有人先开口的场合',
      '团建主持、活动暖场',
      '客户见面破冰、介绍环节',
      '需要「有人站出来说话」的危机时刻',
      '公开表彰、上台领奖（你也愿意）',
      '直播答疑、开放麦讨论',
      '让新项目在群里被看见的传播位'
    ],
    avoidMomentsList: [
      '领导兴头上的独角戏、先听十分钟别插话',
      '全员闭麦只听汇报',
      '需要绝对低调背锅跑路的场合',
      '你一开口就会被记成「延长会议的人」',
      '严肃处分会、哭丧脸复盘',
      '要求「今天只听不说」的封闭培训',
      '老板正在发挥，任何人插话都像踩雷',
      '需要隐身背锅、少留痕迹的任务',
      '对方只想快速同步、不想互动的短会',
      '摄像头坏了还被要求「必须露脸」的玄学会议'
    ],
    quotes: [
      '「你存在的意义就是让老板记住你——虽然每次都是因为讲冷笑话。」',
      '「伤害是会说话的。」——你的举手也是。',
      '「我还能再抢救一下！」——抢救的是会议气氛。',
      '「人生如戏」——而你总拿着主麦。',
      '「不开屏的孔雀，约等于没来上班。」',
      '「C 位不是抢来的，是你往那一站，C 位自己来的。」',
      '「沉默是金，但你更相信黄金时段属于发言。」',
      '「存在感这件事，你从未降过画质。」',
      '「别人开会是听，你开会是出演。」',
      '「聚光灯过敏？不存在的，你是光合作用型同事。」'
    ]
  },
  rebuttal: {
    id: 'hedgehog',
    dimension: 'rebuttal',
    name: '好的刀已出鞘',
    emoji: '🦔',
    subtitle: '平时缩成一团 · 惹急了扎你一手血',
    fixedTag: '嘴硬心软',
    desc: '平时缩成一团人畜无害，惹急了扎你一手血。嘴硬心软——表面说「好的」，心里已写好 800 字反击文案。',
    advice: '刺可以竖，也记得给人递创可贴。',
    colleagueViews: [
      '「又爱又怕：爱听你拆逻辑，怕下句点到自己。」',
      '「ta 一笑，就知道有人要被问住了。」',
      '「会后复盘群里，ta 的消息永远带着问号。」',
      '「看起来好说话，真吵起来字字见血。」',
      '「「好的」两个字背后，可能藏着完整反驳提纲。」',
      '「不主动惹事，但从不怕把事说清楚。」',
      '「同事找 ta 讨说法前，会先深呼吸三次。」',
      '「刺不是对准人，是对准糊弄。」',
      '「嘴上客气，批注里不留情。」',
      '「你以为结束了，其实 ta 在打腹稿第二回合。」'
    ],
    suitedFors: [
      '澄清需求、戳破空话、把绕圈会议拉回正题',
      '评审拍板、风险提示、拒绝不合理加塞',
      '需要「敢说」的人挡在前面',
      '合同/口径核对、抓漏洞',
      '反向压力测试方案靠不靠谱',
      '帮团队挡住甩锅型需求',
      '把「感觉不对」翻译成具体问题',
      '跨部门扯皮时的逻辑裁判',
      '复盘里点出真正卡点的人',
      '保护边界：什么该接、什么该拒'
    ],
    avoidMomentsList: [
      '全员和谐吹捧会、领导兴头上的汇报',
      '需要先捧后再提的饭局外交',
      '对方只想被安慰、不想被分析',
      '情绪大于事实的吵架现场',
      '「今天先别抬杠」的临时禁言令',
      '你一反驳就会被扣「不配合」帽子的场合',
      '客户只想听好话的走过场会议',
      '刚入职还没摸清政治地形时的硬刚',
      '对方已道歉、你还要追着逻辑补刀',
      '公开处刑式对线（刺太多也会伤到自己）'
    ],
    quotes: [
      '「表面说「好的」，心里已经写了 800 字反击文案，只是没发出去。」',
      '「伤害是会说话的。」——你的批注也是。',
      '「不疯魔，不成活。」——你的疯魔叫逻辑闭环。',
      '「出来混，总是要还的。」——漏洞也是。',
      '「我不是抬杠，我是帮你把坑填上。」',
      '「刺猬不是攻击型，是边界型。」',
      '「嘴硬心软：刺向外，心向内。」',
      '「你的「好的」= 已读，稍后刀到。」',
      '「沉默不是认输，是在给刺充能。」',
      '「好好说话可以，糊弄不可以。」'
    ]
  },
  drama: {
    id: 'rabbit',
    dimension: 'drama',
    name: '未播先大结局',
    emoji: '🐰',
    subtitle: '风吹草动就竖耳朵 · 内心戏比甄嬛传还长',
    fixedTag: '脑子比手快',
    desc: '风吹草动就竖耳朵。老板一个眼神能想三天，内心戏比《甄嬛传》还长——外面还没翻车，剧情已到大结局。',
    advice: '把最坏情况写下来，大半不会发生。',
    colleagueViews: [
      '「你都交了，为什么还在改第三版……」',
      '「ta 说「没事」，通常是有一百个事。」',
      '「消息已读不回？不，是在打腹稿。」',
      '「老板随口一句，ta 能演完整季。」',
      '「表情平静，内心弹幕正在滚动。」',
      '「群里「收到」，私聊自己已开三场复盘。」',
      '「风吹草动，耳朵先到，人还在工位。」',
      '「你以为 ta 在发呆，其实在剪辑内心戏。」',
      '「一句「状态不行」，能搜出五篇被裁征兆。」',
      '「最稳的交付，往往来自最不安的人。」'
    ],
    suitedFors: [
      '质量把关、预案齐全、把坑填严',
      '细致校对、风险清单、别让团队踩雷',
      '需要有人替大家提前焦虑一遍的项目',
      '上线前最后一道检查',
      '敏感沟通的措辞打磨',
      '客户投诉预案、危机演练',
      '文档查漏补缺、边界条件穷举',
      '把「可能翻车点」列成清单的人',
      '需要谨慎口径的对外回复',
      '长期维护、怕埋雷的系统活'
    ],
    avoidMomentsList: [
      '开放性截止时间、「差不多就行」',
      '周五下午无优先级加塞',
      '信息不全却催拍板、需求反复变',
      '被当成情绪垃圾桶却不给决策权',
      '老板一句模糊评价不给下文',
      '只说「再优化优化」不说优化什么',
      '公开点名但不给改进路径',
      '谣言满天飞的小道消息局',
      '连续加班还不给目标的消耗战',
      '「你自己看着办」然后事后追责'
    ],
    quotes: [
      '「老板说「状态不行」，你已经开始搜「被裁员前的 5 个征兆」了。」',
      '「人生就像一盒巧克力」——你打开前已脑补二十种翻车。',
      '「稳住，我们能赢。」——你已经演完输的那一集了。',
      '「我还能再抢救一下！」——抢救的是自己的心率。',
      '「风吹草动，耳朵先竖——这叫职业敏感。」',
      '「内心戏院今日满场，外场观众请安静。」',
      '「你不是矫情，你是高配预警系统。」',
      '「最坏情况想一遍，反而睡得着。」',
      '「焦虑是燃料，别让它烧到自己。」',
      '「外面风平浪静，你已在脑内打完三场宫斗。」'
    ]
  },
  creativity: {
    id: 'squidward',
    dimension: 'creativity',
    name: '离谱但能用',
    emoji: '🐙',
    subtitle: '又丧又清醒 · 脑洞大到漏风',
    fixedTag: '离谱但有用',
    desc: '想法多到脑袋装不下，一个脑子不够用，必须八个一起转。又丧又清醒，天天觉得周围人都差点意思——然后总被现实轻轻打脸。',
    advice: '灵感很好，配上一点点落地清单会更香。',
    colleagueViews: [
      '「你这个方案……好像能行？等等是不是又跑题了？」',
      '「ta 的白板永远比文档热闹。」',
      '「问进度得一个宇宙，问方案得三个平行宇宙。」',
      '「点子喷泉本人，收尾偶尔缺一根水管。」',
      '「开会时眼睛发光，通常是又想到歪招。」',
      '「模板在 ta 手里会发芽，有时还开花。」',
      '「你要一个答案，ta 给你一条产品线。」',
      '「八个方向同时开工，重点在「同时」。」',
      '「正经问题，不正经解法，意外能用。」',
      '「群里刷存在感的方式：甩一张脑暴图，再叹一口气。」'
    ],
    suitedFors: [
      '头脑风暴、起名大会、把无聊需求讲成故事',
      '破局讨论、产品脑暴、需要新说法的汇报',
      '让死气沉沉的方案会重新呼吸',
      '活动创意、传播点子、Slogan 打磨',
      '卡住时的换角度救援',
      '跨界借鉴、把别的行业招式搬过来',
      '原型草图、概念演示、愿景页',
      '需要「先有想法再谈可行」的阶段',
      '内部黑客松、创意比赛',
      '把旧流程讲出新故事的包装活'
    ],
    avoidMomentsList: [
      '机械填表、无脑复制粘贴、「按模板来别发挥」',
      '只要执行不要想法的流水线',
      '无限改但不给目标',
      '被要求立刻给出精确工时却还在想点子',
      '老板要的是「照做」不是「发散」',
      '合规审查到逐字锁定的文本',
      '已经定稿还被拉回来重新脑暴',
      '时间只够执行、不够做梦的冲刺周',
      '创意被连环否决还不给约束条件',
      '「你就按上次那份改个数」的重复劳动'
    ],
    quotes: [
      '「你提议每周四在家里办公，然后老板说「先从每天提前 1 小时上班开始」。」',
      '「我还能再抢救一下！」——抢救的是灵感不是进度条。',
      '「不疯魔，不成活。」——你的疯魔叫换个角度。',
      '「世界是你们的」——创意也是，别只收藏不输出。',
      '「一个脑子不够用？那是你的超配提醒。」',
      '「八爪齐出，总有一爪能抓住问题。」',
      '「离谱是入口，有用是出口。」',
      '「脑洞漏风不可怕，可怕的是从不换气。」',
      '「先让想法上岸，再让计划靠港。」',
      '「你负责天马行空，世界负责泼冷水——合作愉快。」'
    ]
  }
}

/** 多维并列最高时的特殊结果 */
export const tieAnimal = {
  id: 'chimera',
  dimension: null,
  name: '开过光的盲盒',
  emoji: '🦌',
  subtitle: '人格混搭限定款 · 哪个都像又哪个都不是',
  fixedTag: '赛博拼接怪',
  image: '/assets/sibuxiang.svg',
  desc: '好几个维度并列第一：闪电、孔雀、刺猬、兔子、章鱼哥的技能树你都点了一点。你不是单一物种，你是开光的「四不像」。',
  advice: '别急着贴一种标签，多面才是你的技能树。',
  colleagueViews: [
    '「你到底是卷还是躺？——答案是：看场次。」',
    '「团队里的万能胶，也是说明书缺失的盲盒。」',
    '「每次以为看懂你，你就切个形态。」',
    '「今天闪电，明天孔雀，后天刺猬。」',
    '「问你性格，HR 都得画雷达图。」',
    '「像开了多开挂，UI 还没统一皮肤。」',
    '「你是同事眼中的「看情况」。」',
    '「既能救场也能躺平，说明书请后补。」',
    '「人格 DLC 太多，主线成谜。」',
    '「四不像不是贬义，是限定联动款。」'
  ],
  suitedFors: [
    '需要切换角色的项目、对接多种脾气的人',
    '复杂协作、跨组沟通、既要创意又要落地',
    '当团队「万能接口人」',
    '救场+补位+临时主持三连',
    '多线程任务切换频繁的岗位',
    '创业小团队一人多职',
    '需要理解卷党也理解躺党的桥梁',
    '活动统筹这种「啥都沾一点」的活',
    '把对立意见翻译成可执行方案',
    '试错期产品：今天试错，明天收敛'
  ],
  avoidMomentsList: [
    '逼你二选一站队、用单一 KPI 定义你',
    '「你就按一种风格来」的死板管理',
    '今天只准摸鱼或只准卷',
    '用一张标签贴纸概括你全部价值',
    '强制选边站的办公室政治',
    '人格测验结果被当成考核依据',
    '要求你永远稳定输出同一种人设',
    '「你到底行不行」的二元审判',
    '把多面解读成「不专一」「不靠谱」',
    '不允许试错、只允许一种正确答案'
  ],
  quotes: [
    '「我全都要。」——人格版。',
    '「稳住，我们能赢。」——先稳住自己是谁。',
    '「不疯魔，不成活。」——你的疯魔叫多开。',
    '「四不像？那叫赛博全图鉴。」',
    '「不是分裂，是技能树点太满。」',
    '「今天的我，不等同于昨天的 Buff。」',
    '「单一人格是简洁模式，你是专业版。」',
    '「混搭不是混乱，是可组合性。」',
    '「标签太少装不下你，雷达图刚刚好。」',
    '「世界喜欢分类，你喜欢通关。」'
  ]
}

/**
 * 10 种两维组合型人格：最高维与次高维差距 ≤ 4 分（约两道题的档位差）时触发。
 * key 按维度 id 排序，如 'attention+procrastination' 表示「显眼×摸鱼」。
 * 文案池各 8 条，结算时随机抽一条并锁定（与单维动物逻辑一致）。
 */
export const comboAnimals = {
  'attention+procrastination': {
    id: 'peacock-sloth',
    dimension: null,
    combo: ['attention', 'procrastination'],
    name: '摸鱼直播中',
    emoji: '🦚',
    subtitle: '摸鱼摸到人尽皆知 · 存在感是摸鱼的掩护',
    fixedTag: '摸鱼也要当主角',
    desc: '摸鱼界的顶流。别人摸鱼偷偷摸摸，你摸鱼光明正大还带解说——DDL 前两小时才开屏，但全公司都知道你在摸哪片海。',
    advice: '摸鱼可以，记得把尾巴收一收，老板会看直播。',
    colleagueViews: [
      '「ta 摸鱼的动作比我上班还忙。」',
      '「每次路过 ta 工位，都有一种看直播的感觉。」',
      '「问 ta 在干嘛，ta 能给你讲半小时剧情。」',
      '「看起来在摸鱼，其实真的在摸鱼，而且毫不避人。」',
      '「ta 的工位是全部门的信息集散中心。」',
      '「开会前五分钟，ta 总能从摸鱼状态无缝切换成开屏状态。」',
      '「别问进度，问就是「在准备了」，并且理直气壮。」',
      '「摸鱼摸出综艺感，也是一种天赋。」'
    ],
    suitedFors: [
      '需要热场子的团队、自带流量的汇报',
      '跨部门破冰、把枯燥会议讲活的场合',
      '一边摸鱼一边产出灵感的弹性工作',
      '需要「有人先开口」的讨论和评审',
      '直播式同步进度（反正你摸鱼也能圆回来）',
      '团建主持、活动气氛担当',
      '把「还没做完」说得像「憋大招」的场合',
      '多线程摸鱼但不误事的日常'
    ],
    avoidMomentsList: [
      '领导查屏巡逻的高压时段',
      '「今天必须交付」且全程盯着的项目',
      '需要绝对安静的封闭开发日',
      '摄像头全程开启的远程会议',
      '严肃复盘会（你的解说欲会害了你）',
      '被要求逐分钟汇报产出的流水线',
      '全员禁言的闭麦培训',
      '绩效面谈现场（摸鱼事迹有目共睹）'
    ],
    quotes: [
      '「我不是在摸鱼，我是在为项目踩点。」',
      '「DDL 是闹钟，开屏是仪式。」',
      '「摸鱼摸到人尽皆知，才叫摸出了风格。」',
      '「你可以说我摸鱼，但不能说我摸得不好看。」',
      '「效率是摸鱼的遮羞布，我是摸鱼的广告牌。」',
      '「工位是舞台，摸鱼是节目。」',
      '「别人上班是上班，我上班是直播上班。」',
      '「等我把这段看完，方案马上就来——马上。」'
    ]
  },
  'procrastination+rebuttal': {
    id: 'sloth-hedgehog',
    dimension: null,
    combo: ['procrastination', 'rebuttal'],
    name: '催我就送人头',
    emoji: '🦔',
    subtitle: '拖归拖，嘴不饶人 · 冷却时间比DDL还长',
    fixedTag: '压哨反杀型',
    desc: '能拖到最后一刻，也能在最后一刻把催你的人都怼回去。你的拖延不是懒，是等着憋个大招——顺便憋一段嘴炮。',
    advice: '刺可以留到关键时候用，平时省着点扎人。',
    colleagueViews: [
      '「催 ta 进度，等于给 ta 送人头。」',
      '「ta 说「马上」，你最好别问「马上是多久」。」',
      '「拖延和嘴硬双修，遇强则强。」',
      '「deadline 前两小时，气场突然从闪电切到刺猬。」',
      '「别惹 ta，ta 会一边拖你的需求一边怼你。」',
      '「ta 的「好的」= 已读，稍后刀到。」',
      '「问 ta 要东西，先想好怎么接 ta 的话。」',
      '「嘴上说着不急，手上真的不急，但嘴上不饶人。」'
    ],
    suitedFors: [
      '压哨绝杀的救火型任务（你享受这个过程）',
      '需要有人戳破空话的评审会',
      '跨部门扯皮时的逻辑选手',
      '帮团队挡不合理加塞',
      '「你行你上」现场（你确实行）',
      '把模糊需求怼成清晰需求',
      '自由排期、不看过程只看结果的活',
      '深夜灵感爆发的独立输出'
    ],
    avoidMomentsList: [
      '连环追问进度的催促型领导',
      '「今天必须出」且全程盯屏的项目',
      '需要跪式服务的客户沟通',
      '公开处刑式的进度播报会',
      '情绪敏感、经不起一句反驳的场合',
      '刚入职还没摸清地形的硬刚期',
      '把「怼」解读成「态度问题」的氛围',
      '每天同步五次状态的项目群'
    ],
    quotes: [
      '「我不是拖延，我是在等一个怼回去的理由。」',
      '「DDL 追不上我，你也说不过我。」',
      '「嘴硬是盔甲，拖延是战术。」',
      '「你可以催我，但别催太狠，狠了我就开刺。」',
      '「压哨绝杀是我的仪式感，附赠一句回敬。」',
      '「手慢，嘴快，心不软。」',
      '「别问进度，问就是「在做了」——语气看你态度。」',
      '「拖延是慢性子，怼人是暴脾气，我全都要。」'
    ]
  },
  'drama+procrastination': {
    id: 'rabbit-sloth',
    dimension: null,
    combo: ['drama', 'procrastination'],
    name: '躺着也在脑补',
    emoji: '🦥',
    subtitle: '躺着焦虑 · 身体躺平，脑子在放连续剧',
    fixedTag: '躺平式内耗',
    desc: '躺着不动，但脑子里已经演完三季：「没做完怎么办？」——然后继续躺着。你的拖延，是精神内耗型的。',
    advice: '焦虑烧不掉活，只会烧掉你。先动五分钟，比想五小时强。',
    colleagueViews: [
      '「ta 说「我焦虑死了」，然后继续刷手机。」',
      '「进度是零，内心戏是满的。」',
      '「ta 的躺平，是物理上的躺平加精神上的狂奔。」',
      '「催 ta 之前，ta 已经把自己骂了三遍了。」',
      '「deadline 前夜，ta 边焦虑边拖延，两不误。」',
      '「问 ta 怎么了，ta 能给你演完一整部职场剧。」',
      '「ta 不是懒，是累——精神上累了一整天，身体还没开始。」',
      '「最怕 ta 说「我没事」，因为接下来是两小时内心独白。」'
    ],
    suitedFors: [
      '自己排期的长线活（反正焦虑会推着你走）',
      '需要极致谨慎的风险检查',
      '把「最坏情况」提前想清楚的预案工作',
      '独处安静、没人催的深水区任务',
      '文档型、可断点续传的工作',
      '危机预案、上线前最后检查',
      '允许按自己节奏推进的项目',
      '把焦虑转化为细节打磨的校对活'
    ],
    avoidMomentsList: [
      '「今天必须交付」的硬 deadline（会内耗到炸）',
      '信息不全还催拍板的场合',
      '老板一句模糊评价不给下文',
      '连续加班还不给目标的消耗战',
      '「差不多就行」的粗糙要求（你会更焦虑）',
      '周五下午无优先级加塞',
      '全程直播进度的监控群',
      '要求当场拍板不给思考时间的会议'
    ],
    quotes: [
      '「身体躺平，精神马拉松。」',
      '「我不是懒，我是在为焦虑热身。」',
      '「脑子里已经加班三小时了，身体还在床上。」',
      '「DDL 不可怕，可怕的是我在想 DDL 之前想什么。」',
      '「躺平是我的姿势，焦虑是我的配速。」',
      '「等我把这场内心戏演完，就去干活——大概。」',
      '「焦虑树懒：动得慢，想得多，睡得香（不，睡不香）。」',
      '「我不是拖延，我是精神先透支了。」'
    ]
  },
  'creativity+procrastination': {
    id: 'squidward-sloth',
    dimension: null,
    combo: ['creativity', 'procrastination'],
    name: '人还在灵感先跑',
    emoji: '🐙',
    subtitle: '拖延是因为在想更妙的主意 · 八条触手全是待办',
    fixedTag: '灵感型拖延',
    desc: '不是不想做，是脑子里同时转着 8 个更好的方案。等你选完，deadline 也到了——你的拖延叫「选择困难式灵感过剩」。',
    advice: '先抓一条触手开始做，剩下的灵感记下来，不会跑。',
    colleagueViews: [
      '「问 ta 方案，ta 给你 8 个方向，每个都只做了一半。」',
      '「ta 的待办列表比论文还长，完成率比彩票还低。」',
      '「催 ta 的时候，ta 说「我在想更好的」。」',
      '「deadline 前，ta 突然从 8 个想法里捡一个开始写。」',
      '「ta 的草稿箱是灵感的坟场。」',
      '「每次以为 ta 在摸鱼，其实 ta 在脑暴。」',
      '「ta 的拖延理由永远是「还在构思」。」',
      '「交给 ta 的活，最后总能超出预期——只要 deadline 够刺激。」'
    ],
    suitedFors: [
      '头脑风暴、创意提案、起名大会',
      '需要新说法的汇报和包装',
      '破局讨论、跨界借鉴',
      '可以憋大招一次性交付的创作型任务',
      '「先有想法再谈可行」的阶段',
      '把无聊需求讲成故事',
      '自由创作期、黑客松',
      '卡住时的换角度救援'
    ],
    avoidMomentsList: [
      '机械填表、无脑复制粘贴',
      '「按模板来，别发挥」的流水线',
      '无限改稿但不给目标的评审',
      '需要立刻精确工时的估算（你还在想点子）',
      '合规审查逐字锁定的文本',
      '时间只够执行不够做梦的冲刺周',
      '「就按上次那份改个数」的重复劳动',
      '定稿后被拉回来重新脑暴'
    ],
    quotes: [
      '「我不是拖延，我是在等灵感挑一个我。」',
      '「八个方案同时开工，重点在同时。」',
      '「DDL 是灵感的分界线：之前是艺术，之后是交付。」',
      '「草稿箱里躺着我的毕设、小说和辞职信。」',
      '「想法太多也是一种拖延，别人不懂。」',
      '「先让想法上岸，再让计划靠港——但靠港总是晚点。」',
      '「我拖延，是因为完美主义在排队。」',
      '「脑洞漏风，风还没吹到键盘上。」'
    ]
  },
  'attention+rebuttal': {
    id: 'peacock-hedgehog',
    dimension: null,
    combo: ['attention', 'rebuttal'],
    name: '开会自带判官',
    emoji: '🦚',
    subtitle: '聚光灯下的冷枪手 · 高调开屏，精准扎人',
    fixedTag: 'C位毒舌',
    desc: '全场焦点是你，冷场终结也是你。你在台上发光，顺便把跑题的人扎回正题——别人对你又爱又怕。',
    advice: '开屏可以，扎人挑对象，别误伤队友。',
    colleagueViews: [
      '「ta 一开口，会议室温度降两度，注意力拉满。」',
      '「既想看 ta 发言，又怕 ta 点到自己。」',
      '「ta 的毒舌自带聚光灯，怼完还带总结。」',
      '「冷场？不存在的，ta 会把冷场变成战场。」',
      '「领导说「大家提提意见」，ta 真敢提。」',
      '「ta 反驳的时候，逻辑和气势都拉满。」',
      '「惹谁都别惹 ta，ta 会让全组都知道你不行。」',
      '「爱 ta 的敢说，怕 ta 的敢怼。」'
    ],
    suitedFors: [
      '评审拍板、戳破空话、拉回跑题会议',
      '需要「敢说」的人挡在前面的场合',
      '路演答辩、公开演示（气场就是说服力）',
      '帮团队挡住甩锅型需求',
      '跨部门扯皮时的逻辑裁判',
      '主持+控场+偶尔怼人的复合角色',
      '把「感觉不对」翻译成具体问题',
      '危机时刻站出来说话'
    ],
    avoidMomentsList: [
      '领导兴头上的独角戏（别抢戏别拆台）',
      '「今天只听不说」的封闭培训',
      '对方只想被安慰不想被分析的场合',
      '刚入职还没摸清政治地形的硬刚期',
      '一反驳就被扣「不配合」帽子的氛围',
      '客户只想听好话的走过场会议',
      '情绪大于事实的吵架现场',
      '公开处刑式对线（刺多伤己）'
    ],
    quotes: [
      '「聚光灯是我的，话筒也是，反驳权更是。」',
      '「我怼的不是人，是逻辑。」',
      '「开屏是礼貌，扎人是本能。」',
      '「你可以沉默，但别在我面前说废话。」',
      '「C 位是站的，刺是带的。」',
      '「别人开会是听，我开会是庭审。」',
      '「高调是我的音量键，毒舌是我的回车键。」',
      '「好好说话可以，糊弄不可以——全场都看着呢。」'
    ]
  },
  'attention+drama': {
    id: 'peacock-rabbit',
    dimension: null,
    combo: ['attention', 'drama'],
    name: '出完风连夜复盘',
    emoji: '🦚',
    subtitle: '开屏了又怕没人看 · 越热闹越容易破防',
    fixedTag: '高调内耗',
    desc: '一边抢 C 位，一边担心「我是不是太多话了？」。你的高调是外壳，内心弹幕每分钟滚动 800 条。',
    advice: '开屏就大方开，别一边开屏一边担心羽毛。',
    colleagueViews: [
      '「ta 发言完，会偷偷数有多少人点头。」',
      '「明明是全场的焦点，收工后还在想「我那句是不是说错了」。」',
      '「ta 高调起来像孔雀，敏感起来像兔子。」',
      '「发个言能复盘三小时，然后问你要反馈。」',
      '「别夸 ta，夸了 ta 会想「是不是客套话」。」',
      '「ta 的群消息已读不回？不，是在打腹稿怎么回。」',
      '「台上光芒万丈，台下疯狂内耗。」',
      '「ta 的「没事」= 有一百个事。」'
    ],
    suitedFors: [
      '公开演讲、上台展示（你享受也紧张，但能赢）',
      '需要在意观众感受的表达场合',
      '敏感沟通的措辞打磨',
      '质量把关、把坑填严',
      '需要有人替大家提前焦虑一遍的预案',
      '复盘改进、把失误变成经验',
      '对外口径的谨慎表达',
      '危机演练、风险清单'
    ],
    avoidMomentsList: [
      '开放性问题被公开点名却无反馈',
      '公开批评不给改进路径',
      '「你自己看着办」然后事后追责',
      '被无视的场合（比被批评更难受）',
      '含糊其辞的老板语录',
      '全场沉默的冷场（你会开始想是不是自己的错）',
      '要求「别太在意」但你在意的时刻',
      '表演完没人捧场的尴尬现场'
    ],
    quotes: [
      '「我开屏，是因为怕没人看；我怕没人看，是因为开屏了。」',
      '「台上是孔雀，台下是兔子。」',
      '「高调是我的保护色，敏感是我的底色。」',
      '「别让我猜，我猜起来能拍八季。」',
      '「我发言完的复盘，比发言本身还长。」',
      '「聚光灯越亮，心里越慌。」',
      '「表情平静，弹幕爆炸。」',
      '「你只管夸，剩下的我自己脑补。」'
    ]
  },
  'attention+creativity': {
    id: 'peacock-squidward',
    dimension: null,
    combo: ['attention', 'creativity'],
    name: '会开成发布会',
    emoji: '🐙',
    subtitle: '表演型天才 · 一个话题能讲出八个平行宇宙',
    fixedTag: '舞台型脑洞',
    desc: '你是会议室的灵感喷泉兼表演艺术家。别人问方案，你直接演完一场产品发布会——还带分镜和音效。',
    advice: '好戏要配好落地，演完记得把方案写下来。',
    colleagueViews: [
      '「ta 汇报像脱口秀，稿子像剧本。」',
      '「问 ta 一个点，ta 给你演一部连续剧。」',
      '「ta 的白板永远在长新点子，还带剧情。」',
      '「开会有 ta 不困，但容易忘记会议主题。」',
      '「ta 的脑暴图，可以当壁画挂墙上。」',
      '「正经问题，ta 给八个不正经解法，意外能用。」',
      '「每次以为 ta 在演，最后发现 ta 真能行。」',
      '「ta 讲方案的时候，眼神里自带观众。」'
    ],
    suitedFors: [
      '产品发布会、路演、创意提案',
      '头脑风暴、把需求讲成故事',
      '活动创意、传播点子、Slogan 打磨',
      '需要「先有想法再谈可行」的阶段',
      '跨部门对齐时的氛围担当',
      '内部黑客松、创意比赛',
      '把旧流程讲出新故事的包装活',
      '直播、短视频脚本、口头表达类工作'
    ],
    avoidMomentsList: [
      '「别发挥，按模板来」的流水线',
      '逐字锁定的合规文本',
      '老板要「照做」不要「发散」',
      '无限改但不给目标的评审',
      '时间只够执行不够做梦的冲刺周',
      '被要求立刻给精确工时的估算',
      '严肃处分会（你的表演欲会闯祸）',
      '「就按上次那份改个数」的重复劳动'
    ],
    quotes: [
      '「方案是剧本，会议室是舞台。」',
      '「我不是在脑暴，我是在彩排发布会。」',
      '「一个点子能讲八个平行宇宙，主角都是我。」',
      '「先演给世界看，再让世界买单。」',
      '「我的脑洞自带 BGM。」',
      '「别人要答案，我给连续剧——附赠花絮。」',
      '「离谱是入口，演出是出口。」',
      '「舞台型脑洞，演着演着就成真了。」'
    ]
  },
  'drama+rebuttal': {
    id: 'rabbit-hedgehog',
    dimension: null,
    combo: ['drama', 'rebuttal'],
    name: '骂完先把自己判了',
    emoji: '🐰',
    subtitle: '表面礼貌，内心开庭 · 想怼不敢怼，脑内已判刑',
    fixedTag: '脑内判官',
    desc: '嘴上说着「好的没问题」，心里已经把对方从入职到离职都审了一遍。你从不输在嘴上，只输在脑内胜诉。',
    advice: '该表达的边界要落地，脑内胜诉不算胜诉。',
    colleagueViews: [
      '「ta 说「没事」，通常是在开庭。」',
      '「ta 的「好的」背后，是完整的反驳提纲。」',
      '「别信 ta 的「没问题」，ta 内心已经上诉三回了。」',
      '「ta 白天笑着说好，晚上备忘录里写满小作文。」',
      '「惹 ta 一时爽，ta 记你一整季。」',
      '「ta 从不当面翻脸，但心里给你判了十年。」',
      '「和 ta 吵架？不存在的，ta 在脑内已经赢了。」',
      '「ta 的礼貌，是庭前调解。」'
    ],
    suitedFors: [
      '需要高情商拒绝的场合',
      '敏感沟通的措辞打磨',
      '把「感觉不对」写成具体清单',
      '细致校对、风险预案',
      '帮团队把矛盾软着陆',
      '复盘时点出真正卡点的人',
      '书面沟通、邮件往来（你在文字里更强）',
      '长期维护、怕埋雷的系统活'
    ],
    avoidMomentsList: [
      '情绪大于事实的吵架现场（你容易憋成内伤）',
      '「今天先别抬杠」的场合（你会憋出病）',
      '被误解却不给解释机会',
      '公开点名又不给反馈',
      '连续加班还不给目标的消耗战',
      '当面冲突（你事后会复盘到失眠）',
      '「你自己看着办」然后追责',
      '对方只想要安慰不想要分析'
    ],
    quotes: [
      '「表面说好的，内心已判刑。」',
      '「我的礼貌是庭前调解，我的沉默是庭审记录。」',
      '「脑内胜诉一万次，现实中怂了一次。」',
      '「备忘录是我未寄出的判决书。」',
      '「心里开庭，嘴上休庭。」',
      '「你赢了嘴，我赢了剧本。」',
      '「想怼不敢怼，脑内怼到你离职。」',
      '「内心法庭今日宣判：对方全责，我原谅。」'
    ]
  },
  'creativity+rebuttal': {
    id: 'squidward-hedgehog',
    dimension: null,
    combo: ['creativity', 'rebuttal'],
    name: '抬杠带新设定',
    emoji: '🐙',
    subtitle: '一个坑一个梗 · 嘴毒是因为看透了',
    fixedTag: '逻辑刺客',
    desc: '拆台拆得有理有据，吐槽吐得花团锦簇。你怼人不靠情绪，靠的是脑洞和逻辑双管齐下。',
    advice: '刺客刀快，记得留活口，下次还要合作。',
    colleagueViews: [
      '「ta 的吐槽自带弹幕效果，听完还想听。」',
      '「别跟 ta 抬杠，ta 会用 8 个角度把你绕晕。」',
      '「ta 的反驳像段子，句句扎心还押韵。」',
      '「ta 拆方案的时候，顺便把方案的前世今生都拆了。」',
      '「和 ta 讨论问题，赢不了，但很好笑。」',
      '「ta 的毒舌是方法论，不是情绪。」',
      '「被 ta 怼完，你甚至有点想鼓掌。」',
      '「ta 嘴上不留情，脑洞也没留情。」'
    ],
    suitedFors: [
      '评审抓漏洞、风险提示',
      '戳破包装过度的方案',
      '帮团队看清「皇帝的新衣」',
      '把绕圈会议拉回正题',
      '段子手式表达、犀利文案',
      '反向压力测试方案靠不靠谱',
      '合同/口径核对',
      '「感觉不对」翻译成具体问题'
    ],
    avoidMomentsList: [
      '对方只想被安慰的场合',
      '「今天别抬杠」的敏感会议',
      '客户只想听好话的走过场',
      '情绪化争吵（你会忍不住发挥，然后失控）',
      '一反驳就被扣「不配合」的氛围',
      '需要绝对低调背锅的场合',
      '刚入职的摸底期（刀先收一收）',
      '公开处刑式对线'
    ],
    quotes: [
      '「我不是抬杠，我是帮你的坑填土。」',
      '「逻辑是刀，脑洞是刀花。」',
      '「怼人我不靠情绪，靠的是八条触手一起想。」',
      '「你可以不同意，但你的漏洞同意了。」',
      '「毒舌是表象，看透是本质。」',
      '「一个坑，我能给你编出一套解法再加一套吐槽。」',
      '「我的嘴和脑洞，总有一个在拆台。」',
      '「好好说话可以，糊弄不行——我有一百种方式说不行。」'
    ]
  },
  'creativity+drama': {
    id: 'squidward-rabbit',
    dimension: null,
    combo: ['creativity', 'drama'],
    name: '戏还没拍已杀青',
    emoji: '🐰',
    subtitle: '想象力全用在脑补 · 编剧型人格',
    fixedTag: '自导自演',
    desc: '你的人生剧本已经写到第五季，每一季都是你脑补出来的。现实的灵感 + 内心的剧场，你是自己的最佳编剧兼唯一观众。',
    advice: '把脑补的剧本写下来，说不定能卖钱；别只当观众。',
    colleagueViews: [
      '「ta 发呆的时候，不是在摸鱼，是在写剧本。」',
      '「老板一句话，ta 能脑补出下季预告。」',
      '「ta 的内心戏比产出还丰富。」',
      '「别让 ta 做决定，ta 会把每个选项都演一遍。」',
      '「ta 说「我想了想」，其实是「我脑补了一整部」。」',
      '「和 ta 共事，像在追更，每集都是新脑洞。」',
      '「ta 的创意和焦虑是同一套系统。」',
      '「ta 脑海里已经失败三次了，现实还没开始。」'
    ],
    suitedFors: [
      '内容创作、剧本、文案、脑暴',
      '把风险想全面的预案工作',
      '产品故事包装、用户共情',
      '「先有想法再谈可行」的阶段',
      '危机演练、情景模拟',
      '跨界脑洞、新玩法设计',
      '文档型创作、深度内容',
      '把平凡讲成传奇的叙事活'
    ],
    avoidMomentsList: [
      '机械填表、无脑执行',
      '「别发挥」的流水线',
      '信息不全却催拍板',
      '被无视的反馈（你的剧场会失控）',
      '「差不多就行」的粗糙要求',
      '时间只够执行不够做梦',
      '模糊评价不给下文',
      '连续加班不给目标的消耗战'
    ],
    quotes: [
      '「别人的人生是纪录片，我的是悬疑剧。」',
      '「脑补是最便宜的旅行，也是最贵的失眠。」',
      '「我的剧本里，我已经是主角了——虽然还没开机。」',
      '「创意是燃料，焦虑是发动机。」',
      '「别催我，我还在剪第五季。」',
      '「想象力全用在脑补上，也是一种偏科。」',
      '「现实还没开始，我心里已经大结局了。」',
      '「自导自演的人生，不需要观众。」'
    ]
  }
}

function pickOne(list) {
  if (!list || !list.length) return ''
  return list[Math.floor(Math.random() * list.length)]
}

function materializeAnimal(base, scores, meta = {}, picker = pickOne) {
  return {
    id: base.id,
    dimension: base.dimension,
    name: base.name,
    emoji: base.emoji,
    image: base.image || null,
    subtitle: base.subtitle,
    fixedTag: base.fixedTag,
    desc: base.desc,
    advice: base.advice,
    colleagueView: picker(base.colleagueViews),
    suitedFor: picker(base.suitedFors),
    avoidMoments: picker(base.avoidMomentsList),
    quote: picker(base.quotes),
    scores: { ...scores },
    ...meta
  }
}

function normalizeScores(input) {
  const next = {}
  for (const id of dimensions.map((d) => d.id)) {
    const raw = Number(input?.[id] ?? 0)
    const safe = Number.isFinite(raw) ? raw : 0
    next[id] = Math.max(0, Math.min(MAX_DIMENSION_SCORE, Math.round(safe)))
  }
  return next
}

function makeSeededPicker(seedInput) {
  let seed = Number(seedInput)
  if (!Number.isFinite(seed)) seed = 1
  seed = (Math.floor(seed) >>> 0) || 1
  const nextRand = () => {
    seed = (seed + 0x6d2b79f5) >>> 0
    let t = seed
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  return (list) => {
    if (!list || !list.length) return ''
    return list[Math.floor(nextRand() * list.length)]
  }
}

function resolveResult(scoresInput, picker = pickOne) {
  const scores = normalizeScores(scoresInput)
  const order = ['procrastination', 'attention', 'rebuttal', 'drama', 'creativity']
  let max = -Infinity
  for (const id of order) {
    const v = scores[id] ?? 0
    if (v > max) max = v
  }
  const leaders = order.filter((id) => (scores[id] ?? 0) === max)

  // 严格并列最高 → 职场四不像
  if (leaders.length !== 1) {
    return materializeAnimal(
      tieAnimal,
      scores,
      {
        tiedDimensions: leaders,
        isTie: true
      },
      picker
    )
  }

  const dim = leaders[0]

  // 两维组合判定：次高维与最高维差距 ≤ 4 分（约两道题的档位差）→ 组合型人格
  let second = -Infinity
  let secondId = null
  for (const id of order) {
    if (id === dim) continue
    const v = scores[id] ?? 0
    if (v > second) {
      second = v
      secondId = id
    }
  }
  if (secondId !== null && max - second <= 4) {
    const comboKey = [dim, secondId].sort().join('+')
    const combo = comboAnimals[comboKey]
    if (combo) {
      return materializeAnimal(
        combo,
        scores,
        {
          tiedDimensions: [dim, secondId],
          isTie: false,
          combo: true
        },
        picker
      )
    }
  }

  return materializeAnimal(
    animalsByDimension[dim],
    scores,
    {
      tiedDimensions: leaders,
      isTie: false
    },
    picker
  )
}

/**
 * 结算最终结果：最高维定动物；并列最高 → 四不像。
 * 文案在此刻随机抽取并固定（避免页面刷新般乱跳）。
 */
export function matchResult(scores) {
  return resolveResult(scores)
}

/** 根据分数生成高低人格标签 */
export function buildPersonalityTags(scores, fixedTag) {
  const highText = {
    procrastination: '摸鱼天花板',
    attention: '显眼包本包',
    rebuttal: '冷却为零',
    drama: '内心戏满档',
    creativity: '脑洞漏风'
  }
  const lowText = {
    procrastination: '卷王预备役',
    attention: '显眼绝缘体',
    rebuttal: '好好先生皮肤',
    drama: '情绪淡人',
    creativity: '模板忠实用户'
  }

  const entries = Object.keys(highText).map((id) => ({
    id,
    score: scores?.[id] ?? 0
  }))
  entries.sort((a, b) => b.score - a.score)
  const highest = entries[0]
  const lowest = entries[entries.length - 1]

  const tags = []
  if (highest) tags.push({ text: highText[highest.id], tone: 'hot' })
  if (lowest && lowest.id !== highest.id) tags.push({ text: lowText[lowest.id], tone: 'cool' })
  if (fixedTag) tags.push({ text: fixedTag, tone: 'neutral' })
  return tags
}

/** 赞赏按钮文案：跟当前结果人设挂钩，别做成通用乞讨按钮 */
const rewardTipsById = {
  flash: '闪电想请个假，你批吗？',
  peacock: '孔雀开屏需要一点掌声',
  hedgehog: '刺猬的刺需要保养，打点机油',
  rabbit: '兔子演了一天，需要一根胡萝卜',
  squidward: '章鱼哥想买第八只手',
  chimera: '盲盒还差一抽，投币续命？',
  'peacock-sloth': '摸鱼直播中，打个赏再继续演',
  'sloth-hedgehog': '催我就送人头，先给刺上点油',
  'rabbit-sloth': '躺着也在脑补，投根胡萝卜续命',
  'squidward-sloth': '灵感还在跑，给章鱼哥加只手',
  'peacock-hedgehog': '开会自带判官，给点掌声保养刺',
  'peacock-rabbit': '出完风还在复盘，投点掌声续命',
  'peacock-squidward': '会开成发布会，打个赏再彩排',
  'rabbit-hedgehog': '骂完先把自己判了，给根胡萝卜',
  'squidward-hedgehog': '抬杠带新设定，给刺打点机油',
  'squidward-rabbit': '戏还没拍已杀青，投根胡萝卜'
}

export function getRewardTip(result) {
  return rewardTipsById[result?.id] || '测得准的话，请作者喝瓶可乐'
}

/** 生成可复制的分享文案（短、狠、一眼想点） */
export function buildShareText(result, siteUrl = '') {
  if (!result?.name) return ''
  const face = result.emoji || ''
  const shareUrl = (siteUrl || '').trim()
  const hook = (result.subtitle || '').trim()
  const view = (result.colleagueView || '').replace(/[「」""“”']/g, '').trim()
  const lines = [
    `我测出是「${result.name}」${face}`,
    hook || (view ? `同事眼里：${view}` : ''),
    '敢不敢来测，看看你是哪种职场人设？',
    shareUrl || ''
  ].filter(Boolean)
  return lines.join('\n')
}

/** 复制后去 @ 同事的邀请文案（强调互相对照） */
export function buildColleagueInvite(result, siteUrl = '') {
  if (!result?.name) return ''
  const face = result.emoji || ''
  const shareUrl = (siteUrl || '').trim()
  return [
    `我是「${result.name}」${face}`,
    '来对一下工位人设，测完把你的称号发我，我们公开处刑（友好版）：',
    '@同事1',
    '@同事2',
    '@同事3',
    shareUrl ? `开测链接：${shareUrl}` : ''
  ].filter(Boolean).join('\n')
}

const shareDimensionOrder = ['procrastination', 'attention', 'rebuttal', 'drama', 'creativity']

function clampScore(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return 0
  return Math.max(0, Math.min(MAX_DIMENSION_SCORE, Math.round(n)))
}

function toBase64Url(input) {
  const utf8 = new TextEncoder().encode(input)
  let binary = ''
  utf8.forEach((b) => {
    binary += String.fromCharCode(b)
  })
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(input) {
  const normalized = String(input || '').replace(/-/g, '+').replace(/_/g, '/')
  const padLen = (4 - (normalized.length % 4)) % 4
  const padded = normalized + '='.repeat(padLen)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}

export function buildSharePayload(result, scores) {
  if (!result?.name) return null
  const normalized = normalizeScores(scores || result?.scores || {})
  const normalizedScores = shareDimensionOrder.map((id) => normalized[id])
  const rawSeed = Number(result?.shareSeed)
  const shareSeed = Number.isFinite(rawSeed)
    ? (Math.floor(rawSeed) >>> 0)
    : (Math.floor(Math.random() * 2147483647) + 1)
  return {
    v: 2,
    s: normalizedScores,
    k: shareSeed
  }
}

export function encodeSharePayload(payload) {
  if (!payload) return ''
  try {
    return toBase64Url(JSON.stringify(payload))
  } catch {
    return ''
  }
}

export function parseSharedResult(token) {
  try {
    const raw = fromBase64Url(token)
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.s) || parsed.s.length !== 5) return null

    const scores = normalizeScores(
      Object.fromEntries(shareDimensionOrder.map((id, i) => [id, clampScore(parsed.s[i])]))
    )

    if (Number(parsed.v) === 2) {
      const seed = Number.isFinite(Number(parsed.k)) ? (Math.floor(Number(parsed.k)) >>> 0) : 1
      const result = resolveResult(scores, makeSeededPicker(seed))
      result.shareSeed = seed
      return { result, scores }
    }

    if (Number(parsed.v) === 1) {
      const tiedDimensions = Array.isArray(parsed.td)
        ? parsed.td.filter((id) => shareDimensionOrder.includes(id))
        : []

      const result = {
        id: parsed.id || '',
        dimension: parsed.d ?? null,
        name: parsed.n || '',
        emoji: parsed.e || '',
        subtitle: parsed.st || '',
        quote: parsed.q || '',
        advice: parsed.a || '',
        colleagueView: parsed.cv || '',
        suitedFor: parsed.sf || '',
        avoidMoments: parsed.av || '',
        fixedTag: parsed.ft || '',
        isTie: !!parsed.t,
        tiedDimensions,
        scores: { ...scores }
      }

      if (!result.name) return null
      if (!result.tiedDimensions.length) {
        const max = Math.max(...shareDimensionOrder.map((id) => scores[id]))
        result.tiedDimensions = shareDimensionOrder.filter((id) => scores[id] === max)
      }
      return { result, scores }
    }

    return null
  } catch {
    return null
  }
}


/**
 * 彩蛋题（不计分，不参与 interleave / 结算）
 * 前端可在答题中途插入（如第 20 题之后），选项不影响任何维度分数；
 * 用户作答后可在结果页按所选选项追加 eggs 里的彩蛋文案。
 */
export const bonusQuestions = [
  {
    id: 'bonus-1',
    isBonus: true,
    dimension: null,
    text: '测试员偷偷告诉你：这道题选什么都一样。你会？',
    options: [
      { text: '随便选一个，继续冲。', score: 0 },
      { text: '倒回去检查刚才的答案。', score: 0 },
      { text: '选完去问客服：“这题是认真的吗？”', score: 0 }
    ],
    eggs: {
      a: '你果然是个狠人。',
      b: '严谨，是刻在DNA里的。',
      c: '这届用户不好带。'
    }
  }
]


/**
 * 完整答题流程：30 题按维度交错 + 彩蛋题自动插入（默认第 20 题之后）。
 * 返回数组可直接用于渲染；彩蛋题对象带 isBonus: true，不计分。
 * bonusAfter 是插入位置（从 0 数）：20 表示插在第 20 题后面。
 */
export function buildQuizFlow({ bonusAfter = 20 } = {}) {
  const flow = [...orderedQuestions]
  if (bonusAfter >= 0 && bonusAfter < flow.length && bonusQuestions.length) {
    flow.splice(bonusAfter, 0, bonusQuestions[0])
  }
  return flow
}

/**
 * 根据用户答案计算各维度分数与彩蛋文案。
 * @param {Object} answers - { [questionId]: optionIndex }，optionIndex 从 0 开始。
 *   彩蛋题可传也可不传：不计入任何维度分数，仅返回对应 eggs 文案。
 * @returns {{ scores: Object<string, number>, egg: string|null }}
 */
export function scoreQuiz(answers = {}) {
  const scores = Object.fromEntries(dimensions.map((d) => [d.id, 0]))
  let egg = null
  for (const q of questions) {
    const idx = answers[q.id]
    if (typeof idx !== 'number' || !q.options[idx]) continue
    scores[q.dimension] += q.options[idx].score
  }
  if (bonusQuestions.length) {
    const b = bonusQuestions[0]
    const bidx = answers[b.id]
    if (typeof bidx === 'number' && b.options[bidx]) {
      const key = ['a', 'b', 'c'][bidx]
      egg = b.eggs[key] || null
    }
  }
  return { scores, egg }
}
