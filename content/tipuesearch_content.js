var tipuesearch = {"pages": [{'title': 'WEEK', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'week2-5', 'text': '', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': '', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': '\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0第八章 有限元件分析  有限元件分析(FMA)是有限元件方法(FEM)實際運用的一種方式，預測結構或流體對應用因素(例如力，壓力，熱量和振動。) 正常來說，第一步驟都是從創建幾何模型開始，然後將模型細分(網格化)為簡單的，小塊的幾何形狀(元素)在特定的節點上，使材料屬性和邊界條件應用於每個元素。 最終，諸如NX 12之類的軟件解決了這個FEA問題，並輸出了結果和可視化效果。 它可以幫助工程師在製造和測試產品之前更好地了解其性能。 \n FEA的一些應用像是結構分析，熱分析，流體流動力學和電磁兼容性。 其中，FEA最常用於結構和固體力學應用中，以計算機械性能（例如應力和位移）。 這對工件的性能至關重要還有用來預測事故發生。 在本章中，我們將演示如何處理實體零件的結構應力和應變分析。 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 8.1 概述 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 8.1.1元素形狀和節點 元素基於維度的數量和元素中節點的數量可分為不同的類型。 以下是用於離散化的某些元素類型。 \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': 'week15 \n 這周練習把檔案由solvespace轉入webots \n \n week16 \n 練習把檔案由solvespace轉入vrep \n \n week17 \n 模擬老師的越野車跟翻譯 \n \n 翻譯 \n \n \n \n \n Building the dynamic shapes \n \n \n \n \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  建立動態形狀 \n \n \n \n \n If we want our robot to be\xa0 dynamically enabled , i.e. react to collisions, fall, etc., then we need to create/configure the shapes appropriately: a shape can be: \n 如果我們要使機器人動起來，並對碰撞，掉落等做出反應，那我們需要創建 設置外型 : 而外型可是動態或靜態 : \n \n dynamic or static: a dynamic (or non-static) shape will fall and be influences by external forces/torques. A static (or non-dynamic) shape on the other hand, will stay in place, or follow the movement of its parent in the scene hierarchy. \n \n 動態形狀會掉落，並對外力扭矩的影響。 \n 靜態形狀會保持原位，或者跟隨其上層再場景層次中移動 \n \n respondable or non-respondable : a respondable shape will cause a collision reaction with other respondable shapes. They (and/or) their collider, will be influenced in their movement if they are dynamic. On the other hand, non-respondable shapes will not compute a collision response if they collide with other shapes. \n \n 響應或不響應 : 一個響應形狀會引起其他響應形狀的碰撞反應。如果他們是動態的，他們與他們 ( 跟他們對撞者 ) 的運動將受到影響。而如果是不響應的形狀語氣他發生碰撞，則不會發生 ( 計算 ) 碰撞反應。 \n Above two points are illustrated\xa0 here . Respondable shapes should be as simple as possible, in order to allow for a fast and stable simulation. A physics engine will be able to simulate following 5 types of shapes with various degrees of speed and stability: \n 以上兩點說明。響應的形狀盡可能簡單，以實現快速穩定的仿真。物理引擎能以不痛速度與穩定性模擬以下五種類型的形狀: \n \xa0 \n \xa0 \n \n Pure shapes : a pure shape will be stable and handled very efficiently by the physics engine. The draw-back is that pure shapes are limited in geometry: mostly cuboids, cylinders and spheres. If possible, use those for items that are in contact with other items for a longer time (e.g. the feet of a humanoid robot, the base of a serial manipulator, the fingers of a gripper, etc.). Pure shapes can be created with [Menu bar --> Add --> Primitive shape:純形狀將穩定並由物理引擎有效的處理。缺點是純形狀的幾何狀受到限制 : 像是長方體，圓柱體和球體。如果可以的話，獎其用於與其他物體長時間接觸的物品 ( 例如 : 人形機器的腳，串型機械手的基座，抓手的手指等 ) 。可以使用【菜單欄 \xad\xad\xad-> 添加 -> 基本形狀】創建純形狀。 \n Pure compound shapes : a pure compound shape is a grouping of several pure shapes. It performs almost as well as pure shapes and shares similar properties. Pure compound shapes can be generated by grouping several pure shapes [Menu bar --> Edit --> Grouping/Merging --> Group selected shapes]. \n \n 純複合形狀 : 純複合形狀是幾個純形狀的組合。它的性能幾乎與純形狀一樣，定具有相似的特性。可以透過對幾個純形狀進行分組來生成純複合形狀【菜單欄 -> 編輯 -> 分組 \\ 合併 -> 分組所選形狀】 \n \n Convex shapes : a convex shape will be a little bit less stable and take a little bit more computation time when handled by the physics engine. It allows for a more general geometry (only requirement: it need to be convex) than pure shapes. If possible, use convex shapes for items that are sporadically in contact with other items (e.g. the various links of a robot). Convex shapes can be generated with [Menu bar --> Add --> Convex hull of selection] or with [Menu bar --> Edit --> Morph selection into convex shapes]. \n \n 凸形狀 : 當由物理引擎里十，凸形狀的穩定性會降低一些，而時間也會增加。與純形狀相比，他允許使用更通用的幾何形狀 ( 它必須是凸性狀 ) 。如果可以，將凸形狀用於偶爾與其他物品接觸的物品 ( 利鶻機器人的各部鏈接 ) 。可以使用【菜單欄 添加 選擇的凸包】或【燦單欄 編輯 將選擇變形為凸型】生成凸型。 \n \n Compound convex shapes, or convex decomposed shapes : a convex decomposed shape is a grouping of several convex shapes. It performs almost as well as convex shapes and shares similar properties. Convex decomposed shapes can be generated by grouping several convex shapes [Menu bar --> Edit --> Grouping/Merging --> Group selected shapes], with [Menu bar --> Add --> Convex decomposition of selection...], or with [Menu bar --> Edit --> Morph selection into its convex decomposition...]. \n \n 複合凸形狀或凸分解形狀：凸分解形狀是幾個凸形狀的組合。 它的性能幾乎與凸形相同，並具有相似的特性。 可以通過將多個凸形分組 [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 分組選定的形狀 ] ，並使用 [ 菜單欄 -> 添加 -> 選擇的凸分解 ...] 來生成凸分解形狀。  ] ，或使用 [ 菜單欄 -> 編輯 -> 將選擇變形到其凸分解 ...] 。 \n \n Random shapes : a random shape is a shape that is not convex nor pure. It generally has poor performance (calculation speed and stability). Avoid using random shapes as much as possible. \n \n 隨機形狀：隨機形狀是既非凸形也不是純淨的形狀。 它通常具有較差的性能（計算速度和穩定性）。 盡量避免使用隨機形狀。 \n So the order of preference would be: pure shapes, pure compound shapes, convex shapes, compound convex shapes, and finally random shapes. Make sure to also read\xa0 this page . In case of the robot we want to build, we will make the base of the robot as a pure cylinder, and the other links as convex or convex decomposed shapes \n 因此，優先順序為：純形狀，純複合形狀，凸形，複合凸形，最後是隨機形狀。 確保還閱讀此頁面。 對於要構建的機器人，我們將其基座設為純圓柱體，將其他鏈接設為凸形或凸形分解形狀。. \n We could use the dynamically enabled shapes also as the visible parts of the robot, but that would probably not look good enough. So instead, we will build for each visible shape we have created in\xa0 the first part of the tutorial \xa0a dynamically enabled counterpart, which we will keep hidden: the hidden part will represent the dynamic model and be exclusively used by the physics engine, while the visible part will be used for visualization, but also for\xa0 minimum distance calculations ,\xa0 proximity sensor detections , etc. \n 我們也可以將動態啟用的形狀用作機器人的可見部分，但是看起來可能不夠好。 因此，相反，我們將為在本教程第一部分中創建的每個可見形狀構建一個動態啟用的副本，該副本將保持隱藏狀態：隱藏部分將代表動態模型，並由物理引擎專用，而 可見部分將用於可視化，還用於最小距離計算，接近傳感器檢測等。 \n We select object\xa0 robot , copy-and-paste it into a new scene (in order to keep the original model intact) and start the\xa0 triangle edit mode . If object\xa0 robot \xa0was a compound shape, we would first have had to ungroup it ([Menu bar --> Edit --> Grouping/Merging --> Ungroup selected shapes]) then merge the individual shapes ([Menu bar --> Edit --> Grouping/Merging --> Merge selected shapes]) before being able to start the triangle edit mode. Now we select the few triangles that represent the power cable, and erase them. Then we select all triangles in that shape, and click Extract cylinder. We can now leave the edit mode and we have our base object represented as a pure cylinder: \n 我們選擇對像機器人，將其複制並粘貼到新場景中（以保持原始模型不變），然後啟動三角形編輯模式。 如果對像機器人是複合形狀，我們首先必須將其取消組合（[菜單欄->編輯->分組/合併->取消組合所選形狀]），然後合併各個形狀（[菜單欄-> 在啟動三角形編輯模式之前，請編輯->分組/合併->合併選定的形狀]）。 現在，我們選擇代表電源線的幾個三角形，並將其刪除。 然後，選擇該形狀中的所有三角形，然後單擊“提取圓柱體”。 現在我們可以離開編輯模式，我們的基礎對象表示為純圓柱體： \n \n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': '1.當python wsgi.py 無法執行(沒有反應): \n 去windows設定把電腦內建的python關掉 \n 2.ssh無法使用(使用者鑰匙不正確): \n 開putty重新設定鑰匙 \n 3.ssh使用者不正確 \n 去控制台->使用者帳戶->管理windows認證->移除一般認證裡那個有問題的使用者 \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n test1 \n \n \n \n', 'tags': '', 'url': 'Develop.html'}]};