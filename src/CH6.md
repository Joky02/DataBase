# CH6 关系数据理论

数据依赖：函数依赖和多值依赖
- 完全函数依赖：如果 $X \rightarrow Y$， 并且对于 $X$ 的任何一个真子集 $X'$，都有 $X'$ not $\rightarrow Y$，则称 $Y$ 对 $X$ 完全函数依赖。
- 部分函数依赖：若 $X \rightarrow Y$， 但 $Y$ 不完全函数依赖于 $X$，则称 $Y$ 对 $X$ 部分函数依赖。
传递函数依赖：在 $R(U)$ 中，如果 $X \rightarrow Y (Y \not\subseteq X)$，$Y \not\subseteq Z$，$Z \not\subseteq Y$，则称 $Z$ 对 $X$ 传递函数依赖。
- 多值函数依赖：$X \rightarrow\rightarrow Y$。当且仅当对 $R(U)$ 的任一关系 $r$，给定的一对 $(x, z)$ 值，有一组 $Y$ 的值，这组值仅仅决定于 $x$ 值而与 $z$ 无关。

范式：
- 1NF：关系的每一个分量必须是一个不可分的数据项。
- 2NF：每个非主属性完全函数依赖于码（$1NF \rightarrow\ 2NF$投影分解法）
- 3NF：每个非主属性不传递依赖于码（$2NF \rightarrow\ 3NF$投影分解法）
- BCNF：所有函数依赖左边都是码（无多值依赖的最高等级）
- 4NF：不允许有非平凡且非函数依赖的多值依赖

如果表的范式级别低，容易出现什么问题？能举例说明其中一个问题；P179
- 数据冗余。
- 更新异常。
- 插入异常。
- 删除异常。

给出部分函数依赖和完全函数依赖的说明；P181

给出码的2个等价定义；全码 VS. 所有属性均为主属性。
- P40；P181；
- 全码是整个属性组是码，只有一个码。所有属性均为主属性可能有多个码，多个码的并集为整个属性组。
全码一定是所有属性均为主属性。

规范化：
- 低一级范式的关系模式，通过模式分解转化为若干高一级范式的关系模式的集合
- 实质：概念的单一化
- 不是规范化程度越高的关系模式就越好

什么是函数依赖的逻辑蕴涵概念？
- 设有关系模式R(U,F)，X $\subseteq$ U、Y $\subseteq$ U，如果从 F 中的函数依赖能够推导出 X $\rightarrow$ Y ，则称F逻辑蕴涵X $\rightarrow$ Y，或称X $\rightarrow$ Y 是 F 的逻辑蕴涵。

什么是闭包：
- 关系模式R(U,F)中，被F所逻辑蕴含的函数依赖的全体，记作F+
- 属性闭包 PPT P91

公理的两个性质：
- 正确性：按公理推导出的所有函数依赖都是正确的（属于F+）
- 完备性：公理能推导出所有的函数依赖

函数依赖集：
- 覆盖
- 等价

最小函数依赖集算法：
- 右边拆成单属性
- 左边既约化（最小化）
- 无冗余

Armstrong公理；
- 设有关系模式R(U,F)，X、Y、Z均为U的子集，推理规则如下：
	- 自反律：如果 Y $\subseteq$ X，则 X $\rightarrow$ Y；
	- 增广律：如果 X $\rightarrow$ Y，则 XZ $\rightarrow$ YZ；
	- 传递律：如果 X $\rightarrow$ Y、Y $\rightarrow$ Z，则 X $\rightarrow$ Z 。


模式分解的2个准则；
- 无损连接分解。无损连接是指分解后的关系经过自然连接可以恢复成原来的关系。（一定能到达BCNF）
- 保持函数依赖分解。保持函数依赖是指分解后的关系不能破坏原来的函数依赖（不能破坏原来的语义）。（分解后总可以到达3NF，不一定能到达BCNF）

无损分解的判定：
- R1 $\cap$ R2 = R2 - R1
- R1 $\cap$ R2 = R1 - R2
- 即共同属性 $\rightarrow$ 不同属性

保持函数依赖的模式分解是什么意思？
- 保持函数依赖是指分解后的关系不能破坏原来的函数依赖（不能破坏原来的语义）。