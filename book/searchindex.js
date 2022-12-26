Object.assign(window.search, {"doc_urls":["CH1.html#ch1-绪论","CH2.html#ch2-关系数据库关系数据模型理论","CH3.html#ch3-sql-1216","CH4.html#ch4-数据库安全性","CH5.html#ch5-数据库完整性数据库的一致性ic业务规则动态","CH6.html#ch6-关系数据理论","CH7.html#ch7-数据库设计某单位公司集团","CH8.html#ch8-数据库编程","CH10.html#ch10-数据库恢复技术-恢复机制的工作原理数据冗余-1218","CH11.html#ch11-并发控制"],"index":{"documentStore":{"docInfo":{"0":{"body":23,"breadcrumbs":2,"title":1},"1":{"body":14,"breadcrumbs":2,"title":1},"2":{"body":33,"breadcrumbs":5,"title":3},"3":{"body":9,"breadcrumbs":2,"title":1},"4":{"body":5,"breadcrumbs":3,"title":2},"5":{"body":85,"breadcrumbs":2,"title":1},"6":{"body":12,"breadcrumbs":2,"title":1},"7":{"body":12,"breadcrumbs":2,"title":1},"8":{"body":5,"breadcrumbs":3,"title":2},"9":{"body":2,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"简述概念：数据，数据库，数据库管理系统，数据库系统； 数据：描述事物的符号记录称为 数据 。 数据库： 数据库 是长期储存在计算机内、有组织的、可共享的、大量数据的集合。数据库中的数据按一定的数据模型组织、描述和储存，具有较小的冗余度、较高的数据独立性和易扩展性，并可为各种用户共享。 数据库管理系统： 数据库管理系统 是位于用户和操作系统之间的一层数据管理软件。 简述数据库管理系统DBMS的主要功能； 数据定义功能（DDL） 数据组织、存储和管理 数据操纵功能（DML） 数据库的事务管理和运行管理 数据库的建立和维护功能（DCL） 其他功能 使用计算机管理数据经历了哪几个阶段？各阶段的主要管理方式是什么？P7 人工管理阶段 文件系统阶段 数据库系统阶段 列出数据库技术的特点（至少3个以上）； 数据结构化 数据的共享性高、冗余度低且易扩充 数据独立性高 物理独立性：用户的应用程序和数据库中数据的物理存储时相互独立的。 逻辑独立性：用户的应用程序与数据库的逻辑结构是相互独立的。 数据由数据库管理系统统一管理和控制 数据的安全性保护 数据的完整性检查 并发控制 数据库恢复 数据建模的三个要求是什么？TODO 简述数据建模过程中的 ①概念模型、②逻辑模型和物理模型； 概念模型：显示世界到信息世界的第一层抽象。 逻辑模型：按计算机观点对数据建模，主要用于数据库管理系统的实现。层次模型、网状模型、关系模型等。 物理模型：对数据的最底层抽象，描述数据在系统内部的表示方式和存取方法，或在磁盘或磁带上的存储方式和存取方法。 E-R 图中，联系有哪几种？各表示了什么业务往来的含义？TODO 一对一。对于实体集 A 中的每一个实体，实体集 B 中至多有一个（也可以没有）与之联系，反之亦然，则称实体集 A 与实体集 B 具有一对一联系，记为 1:1。 一对多。 多对多。 数据逻辑模型三要素是什么？ 数据结构 数据操作 数据的完整性约束条件 人们已经实现了的数据逻辑模型有哪些？（列出三种） 层次模型 网状模型 关系模型 面向对象数据模型 关系型数据模型的三要素是什么？固有性质是什么？ 规范化的二维表 增删改查 实体完整性、参照完整性、用户定义的完整性 关系的每一个分量必须是一个不可分的数据项。 关系型数据模型中的完整性约束有哪些？简单加以说明；P45-48 实体完整性。若属性 $A$ 是基本关系 $R$ 的主属性，则 $A$ 不能取空值。 参照完整性。若属性 $F$ 是基本关系 $R$ 的外码，它与基本关系 $S$ 的主码 $K_S$ 相对应，则对于 $R$ 中每个元组在 $F$ 上的值必须： 或者取空值（$F$ 的每个属性值均为空值）; 或者等于 $S$ 中某个元组的主码值。 用户定义的完整性。针对某一具体关系数据库的约束条件，它反映某一具体应用所设计的数据必须满足的语义要求。 关系型数据模型的优缺点是什么？ 优点： 关系模型与格式化模型和不同，它是建立在严格的数学概念的基础上的。 关系模型的概念单一。 关系模型的存取路径对用户透明，从而具有更高的数据独立性、更好的安全保密性，也简化了程序员的工作和数据库开发建立的工作。 给出数据库的三层模式结构，并加以说明； 模式。也称逻辑模式，是数据库中全体数据的逻辑结构和特征的描述，是所有用户的公共数据视图。 外模式也称子模式或用户模式。它是数据库用户能够看见和使用的局部数据的逻辑结构和特征的描述，是数据库用户的数据试图，是与某一应用有关的数据的逻辑表示。 内模式也称存储模式，一个数据库只有一个内模式。它是数据物理结构和存储方式的描述，是数据再数据库内部的组织方式。 什么是数据独立性？在数据库系统中是如何实现的？ 数据独立性：把数据的具体组织六个i数据库管理系统管理，使用户能逻辑地、抽象地处理数据，而不必关心数据在计算机中的具体表示方式和存储方式。 物理独立性：用户的应用程序和数据库中数据的物理存储时相互独立的。 逻辑独立性：用户的应用程序与数据库的逻辑结构是相互独立的。 数据库管理系统在三级模式之间提供了两层映像：外模式/模式映像和模式/内模式映像。","breadcrumbs":"CH1 绪论 » CH1 绪论","id":"0","title":"CH1 绪论"},"1":{"body":"关系代数运算有哪些？哪些是基本的运算？ 并差交笛卡尔积、选择投影连接除 并差笛卡尔选择投影 列出关系的几条性质（3-4条即可）； 列是同质的，即每一列中的分量是统一类型的数据，来自同一个域。 不同的列可出自同一个域，称其中的每一列为一个属性，不同的属性要给予不同的属性名。 列的顺序无所谓，即列的次序可以任意交换。 任意两个元组的候选码不能取相同的值。 行的顺序无所谓，即行的次序可以任意交换。 分量必须取原子值，即每一个分量都必须是不可分的数据项。 码的概念，以及主属性、非主属性； 某一属性组的值能唯一地表示一个元组，而其自己不能，则称该属性组为候选码。 候选码的诸属性称为主属性。 不包含在任何候选码中的属性称为非主属性或非码属性。 什么是关系模型的实体完整性约束？举例说明。P45 实体完整性。若属性 $A$ 是基本关系 $R$ 的主属性，则 $A$ 不能取空值。 什么是关系模型的参照完整性约束？举例说明。P47 参照完整性。若属性 $F$ 是基本关系 $R$ 的外码，它与基本关系 $S$ 的主码 $K_S$ 相对应，则对于 $R$ 中每个元组在 $F$ 上的值必须： 或者取空值（$F$ 的每个属性值均为空值）; 或者等于 $S$ 中某个元组的主码值。 什么是关系模型的用户自定义完整性约束？举例说明。P48 用户定义的完整性。针对某一具体关系数据库的约束条件，它反映某一具体应用所设计的数据必须满足的语义要求。 等值连接与自然连接的区别。 自然连接是一种特殊的等值连接。他要求两个关系中进行比较的分量必须是同名的属性组，并且在结果中把重复的属性列去掉。","breadcrumbs":"CH2 关系数据库/关系数据模型理论 » CH2 关系数据库/关系数据模型理论","id":"1","title":"CH2 关系数据库/关系数据模型理论"},"2":{"body":"简述SQL语言的特点； 综合统一 高度非过程化 面向集合的操作方式 以同一种语法结构提供多种使用方式 语言简洁，易学易用 列出表级约束或行级约束的几个关键字，并解释其含义； PRIMARY KEY，主码 FOREIGN KEY，外码 UNIQUE，取唯一值 NOT NULL 和 NULL 约束 DEFAULT 定义 CHECK 约束 简述索引的含义，并说明索引与ORDER BY的区别； 索引：对表中的记录进行逻辑排序，加快检索的速度。 区别：索引建立好后是时时刻刻保持有序的；ORDER BY 是每次询问都重新排序，本身并不存在实际对应的表结构。 写出完整的SELECT语句的格式； select [all | distinct] <目标列表达式>[, <目标别表达式>] ...\nfrom <表名或视图名>[, <表明或视图名>] | (<select 语句>) [AS] <别名>\n[where <条件表达式>]\n[group by <列名 1> [having <条件表达式>]]\n[order by <列名 2> [ASC | DESC]]; 说明WHERE子句中的<条件表达式>，与HAVING子句中的<组过滤表达式>的区别；P99 where 子句与 having 短语的区别在于作用对象不同。where 子句作用域基本表或视图，从中选择满足条件的元组。having 短语作用域组，从中选择满足条件的组。 掌握关键字：DISTINCT, AS 别名,LIKE,BETWEEN AND, NULL等 给出组函数（聚集函数）与单值函数的区别。 聚集函数的作用对象往往是一列，而单值函数的作用对象往往是一个值。 where 子句中是不能用聚集函数作为条件表达式的。聚集函数只能用于 select 子句和 group by 中的 having 子句。 子查询注意事项；ALL, ANY ,EXISTS(子查询)的使用。 视图的作用； 视图能够简化用户的操作 视图使用户能以多种角度看待同一数据 视图对重构数据库提供了一定程度的逻辑独立性 视图能够对机密数据提供安全保护 适当利用视图可以更清晰地表达查询 视图的更新问题。 由于视图时不实际存储数据的虚表，因此对视图的更新最终要转换为对基本表的更新。 在关系数据库中，并不是所有的视图都是可更新的。一般地，行列子集视图是可更新的。 表示今天：WHERE REGIST_DATE=GETDATE().","breadcrumbs":"CH3 SQL » CH3 SQL 12.16","id":"2","title":"CH3 SQL 12.16"},"3":{"body":"达到 C1、C2 安全级别的 DBMS 提供了哪些安全保护措施？ 该级只提供了非常初级的自主安全保护，能够实现对用户和数据的分离，进行 自主存取控制（DAC） ，保护或限制用户权限的传播。 该级实际上是安全产品的最低档，提供受控的存取保护，即将 C1 级的 DAC 进一步细化，以个人身份注册负责，并实施审计和资源隔离。 两种存取控制方式的描述； C1级：自主存取控制就是由用户（如数据库管理员）自主控制对数据库对象的操作权限，哪些用户可以对哪些对象、进行哪些操作，完全取决于用户之间的授权。任何用户只要需要，就有可能获得对任何对象的操作权限。这种存取控制方式非常灵活，但有时也容易失控。目前大多数数据库管理系统都支持自主存取控制方式。 B1级：强制存取控制的思路是，为每一个数据库对象标以一定的密级（Classification level），对每一个用户都确定一个许可级别（Clearance level）。如密级可以分为绝密、机密、保密、秘密、公开等若干级别；而用户可以划分为一级用户（可以操作所有数据）、二级用户（可以操作除绝密以外的所有数据）、三级用户等。 GRANT语句中的WITH GRANT OPTION ； 角色的概念。 数据库角色是被命名的一组与数据库操作相关的权限，角色是权限的集合。","breadcrumbs":"CH4 数据库安全性 » CH4 数据库安全性","id":"3","title":"CH4 数据库安全性"},"4":{"body":"完整性违规的处理方式； 用PRIMARY KEY定义了关系的主码后，每当用户对基本表插入一条记录或对主码进行更新操作时，DBMS将进行如下的检查： 检查主码是否唯一，如果不唯一则拒绝插入或修改； 检查主码的各个属性是否为空，只要有一个为空就拒绝插入或修改。 叙述触发器的作用及使用方法； 触发器是用户定义在关系表上的一类由事件驱动的特殊过程。一旦定义，任何对表的增、删、改操作均由服务器自动激活相应的触发器。 由服务器自动激活 可以进行更为复杂的检查和操作，具有更精细和更强大的数据控制能力 触发器的执行,是由触发事件激活的,并由数据库服务器自动执行的。一个表上可能定义了多个触发器，比如多个BEFORE触发器，多个AFTER触发器等。同一个表上的多个触发器激活时遵循如下的执行顺序： 执行该表上的BEFORE触发器； 激活触发器的SQL语句； 执行该表上的AFTER触发器。 对于同一种类型的BEFORE/AFTER触发器，按照“谁先创建谁先执行”的原则执行。 在SQL SERVER中，三类触发器。 插入触发器； 更新触发器； 删除触发器。","breadcrumbs":"CH5 数据库完整性 » CH5 数据库完整性//数据库的一致性：IC+业务规则（动态）","id":"4","title":"CH5 数据库完整性//数据库的一致性：IC+业务规则（动态）"},"5":{"body":"数据依赖：函数依赖和多值依赖 完全函数依赖：如果 $X \\rightarrow Y$， 并且对于 $X$ 的任何一个真子集 $X'$，都有 $X'$ not $\\rightarrow Y$，则称 $Y$ 对 $X$ 完全函数依赖。 部分函数依赖：若 $X \\rightarrow Y$， 但 $Y$ 不完全函数依赖于 $X$，则称 $Y$ 对 $X$ 部分函数依赖。 传递函数依赖：在 $R(U)$ 中，如果 $X \\rightarrow Y (Y \\not\\subseteq X)$，$Y \\not\\subseteq Z$，$Z \\not\\subseteq Y$，则称 $Z$ 对 $X$ 传递函数依赖。 多值函数依赖：$X \\rightarrow\\rightarrow Y$。当且仅当对 $R(U)$ 的任一关系 $r$，给定的一对 $(x, z)$ 值，有一组 $Y$ 的值，这组值仅仅决定于 $x$ 值而与 $z$ 无关。 1NF：关系的每一个分量必须是一个不可分的数据项。 2NF，3NF，BCNF，4NF：P181-P188 如果表的范式级别低，容易出现什么问题？能举例说明其中一个问题；P179 数据冗余。 更新异常。 插入异常。 删除异常。 给出部分函数依赖和完全函数依赖的说明；P181 给出码的2个等价定义；全码 VS. 所有属性均为主属性。 P40；P181； 全码是整个属性组是码，只有一个码。所有属性均为主属性可能有多个码，多个码的并集为整个属性组。 全码一定是所有属性均为主属性。 什么是函数依赖的逻辑蕴涵概念？ 设有关系模式R(U,F)，X $\\subseteq$ U、Y $\\subseteq$ U，如果从 F 中的函数依赖能够推导出 X $\\rightarrow$ Y ，则称F逻辑蕴涵X $\\rightarrow$ Y，或称X $\\rightarrow$ Y 是 F 的逻辑蕴涵。 Armstrong公理； 设有关系模式R(U,F)，X、Y、Z均为U的子集，推理规则如下： 自反律：如果 Y $\\subseteq$ X，则 X $\\rightarrow$ Y； 增广律：如果 X $\\rightarrow$ Y，则 XZ $\\rightarrow$ YZ； 传递律：如果 X $\\rightarrow$ Y、Y $\\rightarrow$ Z，则 X $\\rightarrow$ Z 。 模式分解的2个准则； 无损连接分解。无损连接是指分解后的关系经过自然连接可以恢复成原来的关系。 保持函数依赖分解。保持函数依赖是指分解后的关系不能破坏原来的函数依赖（不能破坏原来的语义）。 保持函数依赖的模式分解是什么意思？ 保持函数依赖是指分解后的关系不能破坏原来的函数依赖（不能破坏原来的语义）。","breadcrumbs":"CH6 关系数据理论 » CH6. 关系数据理论","id":"5","title":"CH6. 关系数据理论"},"6":{"body":"简述数据库设计的几个阶段的工作内容； 需求分析阶段//DFD图+数据字典 准确了解与分析用户需求（包括数据与处理）//最困难、最耗时 概念结构设计阶段//与具体的DBMS无关 整个数据库设计的关键 通过对用户需求进行综合、归纳与抽象，形成一个独立于具体DBMS的概念模型 逻辑结构设计阶段//与DBMS有关 将概念结构转换为某个DBMS所支持的数据模型 对其进行优化 物理结构设计阶段//索引、聚集的考虑 运用DBMS提供的数据库语言（如SQL）及宿主语言，根据逻辑设计和物理设计的结果 建立数据库 编制与调试应用程序 组织数据入库 进行试运行 数据库实施阶段 数据库应用系统经过试运行后即可投入正式运行 在数据库系统运行过程中必须不断地对其进行评价、调整与修改 数据库运行和维护阶段 把数据库设计和对数据库中数据处理的设计紧密结合起来 将这两个方面的需求分析、抽象、设计、实现在各个阶段同时进行，相互参照，相互补充，以完善两方面的设计 在逻辑结构设计阶段，如何处理E-R图中1:n的联系？P232 可以转换成一个独立的关系模式，也可以与 n 端对应的关系模式合并。 合并分E-R图时，可能会出现哪些冲突？ 属性冲突。 属性域冲突 属性值的类型 取值范围 取值集合不同 属性取值单位冲突 命名冲突。 同名异义：不同意义的对象在不同的局部应用中具有相同的名字 异名同义（一义多名）：同一意义的对象在不同的局部应用中具有不同的名字 结构冲突。 同一对象在不同应用中具有不同的抽象 同一实体在不同分E-R图中所包含的属性个数和属性排列次序不完全相同 实体之间的联系在不同局部视图中呈现不同的类型 简述数据库的重组织和重构造的区别。P240 数据库的重组织并不修改原设计的逻辑和物理机构，而数据库的重构造则不同，它是指部分修改数据库的模式和内模式。 子模式含义； 数据用户能够看见和使用的局部数据的逻辑结构和特征的描述，是数据库用户的数据视图，是与某一应用有关的数据的逻辑表示。","breadcrumbs":"CH7 数据库设计 » CH7 数据库设计//某单位/公司/集团。。。。","id":"6","title":"CH7 数据库设计//某单位/公司/集团。。。。"},"7":{"body":"存储过程的作用及使用方法？ 存储过程：由PL/SQL语句书写的过程，经编译和优化后存储在数据库服务器中，使用时只要调用即可。 创建存储过程： CREATE Procedure 过程名（［参数1，参数2，...］） AS\t<PL/SQL块>； 过程名：数据库服务器合法的对象标识 参数列表：用名字来标识调用时给出的参数值，必须指定值的数据类型。参数也可以定义输入参数、输出参数或输入/输出参数。默认为输入参数。 过程体：是一个<PL/SQL块>。包括声明部分和可执行语句部分 执行存储过程： CALL/PERFORM Procedure 过程名(［参数1，参数2，...］)； 使用CALL或者PERFORM等方式激活存储过程的执行。 在PL/SQL中，数据库服务器支持在过程体中调用其他存储过程 删除存储过程 DROP PROCEDURE 过程名()；","breadcrumbs":"CH8 数据库编程 » CH8 数据库编程","id":"7","title":"CH8 数据库编程"},"8":{"body":"事务的 4 个特性是什么？举例说明其中的一个特性； 原子性（Atomicity）//出故障 事务的原子性强调了一个事务是一个逻辑工作单元，是一个整体，是不可分割的。一个事务所包含的操作要么全部做，要么全部不做。 一致性（Consistency）//事务的一致性 一个事务执行一项数据库操作，事务将使数据库从一种一致性的状态变换成另一种一致性状态。 在事务执行前，总是假设数据库是一致的，那么当事务成功执行后，数据库肯定仍然是一致的。//可串行化调度/2PL协议 隔离性（Isolation） 如果每个事务单独执行能保持原子性和一致性，这些事务并发执行也能保持原子性和一致性，则是事务的隔离性。//封锁机制/时间印协议 持续性（Durability ）//出故障 事务的持久性是指一旦事务成功完成，该事务对数据库所施加的所有更新都是永久的。 //数据库备份技术 故障类型有哪些？举例说明； 事务内部的故障 有的是可以通过事务程序本身发现的(见下面转账事务的例子) 有的是非预期的 系统故障 称为软故障，是指造成系统停止运转的任何事件，使得系统要重新启动。 整个系统的正常运行突然被破坏 所有正在运行的事务都非正常终止 不破坏数据库 内存中数据库缓冲区的信息全部丢失 介质故障 称为硬故障，指外存故障 磁盘损坏 磁头碰撞 操作系统的某种潜在错误 瞬时强磁场干扰 计算机病毒 一种人为的故障或破坏，是一些恶作剧者研制的一种计算机程序 可以繁殖和传播 基于检查点故障恢复策略；日志文件概念； 基于检查点故障恢复策略： 日志文件是用来记录事务对数据库的更新操作的文件。 对于以记录为单位的日志文件，日志文件中需要登记的内容包括： 各个事务的开始标记。 各个事务的结束标记。 各个事务的所有更新操作。 故障恢复策略的工作原理：冗余。","breadcrumbs":"CH10 数据库恢复技术 » CH10 数据库恢复技术 //恢复机制的工作原理：数据冗余 12.18","id":"8","title":"CH10 数据库恢复技术 //恢复机制的工作原理：数据冗余 12.18"},"9":{"body":"什么是事务的串行调度？并发调度？ 如果不加以控制，事务的并发调度可能会产生什么问题？ 简述封锁机制的工作原理； 引入封锁机制，如何解决上述3个问题？ 死锁预防、诊断；死锁的判别； 冲突操作对；事务优先图；等价的串行调度； 2PL协议； 多粒度封锁协议。","breadcrumbs":"CH11 并发控制 » CH11 并发控制","id":"9","title":"CH11 并发控制"}},"length":10,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"2":{".":{"1":{"6":{"df":1,"docs":{"2":{"tf":1.0}}},"8":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},":":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.0}}}},"，":{"df":0,"docs":{},"参":{"df":0,"docs":{},"数":{"2":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"2":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"，":{"3":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"，":{"b":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"，":{"4":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"：":{"df":0,"docs":{},"p":{"1":{"8":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}}},"3":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"9":{"tf":1.0}}},"4":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":1.0},"8":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"s":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"b":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"c":{"1":{"df":1,"docs":{"3":{"tf":1.0}},"、":{"c":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"或":{"df":0,"docs":{},"者":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{},"h":{"1":{"0":{"df":1,"docs":{"8":{"tf":1.0}}},"1":{"df":1,"docs":{"9":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"3":{"df":1,"docs":{"2":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"4":{"tf":1.0}}},"6":{"df":1,"docs":{"5":{"tf":1.0}}},"7":{"df":1,"docs":{"6":{"tf":1.0}}},"8":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"m":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.7320508075688772}}}},"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"s":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"f":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.7320508075688772}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"f":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"逻":{"df":0,"docs":{},"辑":{"df":0,"docs":{},"蕴":{"df":0,"docs":{},"涵":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"语":{"df":0,"docs":{},"句":{"df":0,"docs":{},"中":{"df":0,"docs":{},"的":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}},"df":0,"docs":{}},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"k":{"_":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"）":{"df":0,"docs":{},"，":{"df":0,"docs":{},"对":{"df":0,"docs":{},"每":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"用":{"df":0,"docs":{},"户":{"df":0,"docs":{},"都":{"df":0,"docs":{},"确":{"df":0,"docs":{},"定":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"许":{"df":0,"docs":{},"可":{"df":0,"docs":{},"级":{"df":0,"docs":{},"别":{"df":0,"docs":{},"（":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{",":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"n":{"df":1,"docs":{"6":{"tf":1.0}},"o":{"df":0,"docs":{},"t":{"\\":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"p":{"1":{"8":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"8":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"4":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"0":{"df":0,"docs":{},"；":{"df":0,"docs":{},"p":{"1":{"8":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"5":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"7":{"df":1,"docs":{"1":{"tf":1.0}}},"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"c":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"(":{"df":0,"docs":{},"u":{",":{"df":0,"docs":{},"f":{")":{"df":0,"docs":{},"，":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}},"、":{"df":0,"docs":{},"y":{"df":0,"docs":{},"、":{"df":0,"docs":{},"z":{"df":0,"docs":{},"均":{"df":0,"docs":{},"为":{"df":0,"docs":{},"u":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"df":4,"docs":{"0":{"tf":2.0},"1":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"=":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"\\":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"5":{"tf":3.605551275463989}}}}}}},"df":0,"docs":{}}}}},"图":{"df":0,"docs":{},"中":{"1":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"的":{"df":0,"docs":{},"联":{"df":0,"docs":{},"系":{"df":0,"docs":{},"？":{"df":0,"docs":{},"p":{"2":{"3":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}}},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":1,"docs":{"5":{"tf":1.0}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"、":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"x":{")":{"$":{"df":0,"docs":{},"，":{"$":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":4.358898943540674}},"z":{"df":1,"docs":{"5":{"tf":1.0}}}},"y":{"df":1,"docs":{"5":{"tf":4.0}},"z":{"df":1,"docs":{"5":{"tf":1.0}}},"、":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"，":{"df":0,"docs":{},"或":{"df":0,"docs":{},"称":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"z":{"$":{"df":0,"docs":{},"，":{"$":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":2.23606797749979}}}}},"breadcrumbs":{"root":{"1":{"2":{".":{"1":{"6":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"8":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},":":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.0}}}},"，":{"df":0,"docs":{},"参":{"df":0,"docs":{},"数":{"2":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"2":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"，":{"3":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"，":{"b":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"，":{"4":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"：":{"df":0,"docs":{},"p":{"1":{"8":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}}},"3":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"9":{"tf":1.0}}},"4":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":1.0},"8":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"s":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"b":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"c":{"1":{"df":1,"docs":{"3":{"tf":1.0}},"、":{"c":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"或":{"df":0,"docs":{},"者":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{},"h":{"1":{"0":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}},"1":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}},"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"2":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"3":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"4":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"5":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"6":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}},"7":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"8":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"m":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.7320508075688772}}}},"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"s":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"f":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.7320508075688772}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"f":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"逻":{"df":0,"docs":{},"辑":{"df":0,"docs":{},"蕴":{"df":0,"docs":{},"涵":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"语":{"df":0,"docs":{},"句":{"df":0,"docs":{},"中":{"df":0,"docs":{},"的":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}},"df":0,"docs":{}},"i":{"c":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"k":{"_":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"）":{"df":0,"docs":{},"，":{"df":0,"docs":{},"对":{"df":0,"docs":{},"每":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"用":{"df":0,"docs":{},"户":{"df":0,"docs":{},"都":{"df":0,"docs":{},"确":{"df":0,"docs":{},"定":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"许":{"df":0,"docs":{},"可":{"df":0,"docs":{},"级":{"df":0,"docs":{},"别":{"df":0,"docs":{},"（":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{",":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"n":{"df":1,"docs":{"6":{"tf":1.0}},"o":{"df":0,"docs":{},"t":{"\\":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"p":{"1":{"8":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"8":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"4":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"0":{"df":0,"docs":{},"；":{"df":0,"docs":{},"p":{"1":{"8":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"5":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"7":{"df":1,"docs":{"1":{"tf":1.0}}},"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"c":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"(":{"df":0,"docs":{},"u":{",":{"df":0,"docs":{},"f":{")":{"df":0,"docs":{},"，":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}},"、":{"df":0,"docs":{},"y":{"df":0,"docs":{},"、":{"df":0,"docs":{},"z":{"df":0,"docs":{},"均":{"df":0,"docs":{},"为":{"df":0,"docs":{},"u":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"df":4,"docs":{"0":{"tf":2.0},"1":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"=":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"\\":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"5":{"tf":3.605551275463989}}}}}}},"df":0,"docs":{}}}}},"图":{"df":0,"docs":{},"中":{"1":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"的":{"df":0,"docs":{},"联":{"df":0,"docs":{},"系":{"df":0,"docs":{},"？":{"df":0,"docs":{},"p":{"2":{"3":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":2.0},"4":{"tf":1.4142135623730951}}}},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":1,"docs":{"5":{"tf":1.0}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"、":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"x":{")":{"$":{"df":0,"docs":{},"，":{"$":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":4.358898943540674}},"z":{"df":1,"docs":{"5":{"tf":1.0}}}},"y":{"df":1,"docs":{"5":{"tf":4.0}},"z":{"df":1,"docs":{"5":{"tf":1.0}}},"、":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"，":{"df":0,"docs":{},"或":{"df":0,"docs":{},"称":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"z":{"$":{"df":0,"docs":{},"，":{"$":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":2.23606797749979}}}}},"title":{"root":{"1":{"2":{".":{"1":{"6":{"df":1,"docs":{"2":{"tf":1.0}}},"8":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"h":{"1":{"0":{"df":1,"docs":{"8":{"tf":1.0}}},"1":{"df":1,"docs":{"9":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"3":{"df":1,"docs":{"2":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"4":{"tf":1.0}}},"6":{"df":1,"docs":{"5":{"tf":1.0}}},"7":{"df":1,"docs":{"6":{"tf":1.0}}},"8":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});