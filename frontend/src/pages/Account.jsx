import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    loginHandle();
  }, []);

  const loginHandle = async () => {
    try {
      //request body
      const insertData = {
        id: id,
      };

      const insertUrl = "http://localhost:5000/findUserById";

      //sends the post request
      const response = await axios.post(insertUrl, insertData);

      if (response.data.success) {
        console.log("Recieved Data from Response", response.data.data);
        setUser(response.data.data);
      } else {
        alert("Unsuccessful");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>{user.username}</h1>
      Account Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel
      ipsa dolores veniam exercitationem? Explicabo sunt libero, praesentium
      facere laboriosam maiores sed aperiam illo maxime ad? Corrupti asperiores
      cupiditate eum.
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
        cupiditate ullam atque architecto nostrum velit. Cumque vitae ab nam est
        pariatur quidem labore voluptates corporis ratione consequuntur alias
        quisquam perspiciatis minus enim molestias dolores suscipit veniam
        excepturi, animi nemo ex eum. Tempora nesciunt earum eligendi! Omnis
        eveniet eaque commodi, aliquam nesciunt reiciendis, porro provident est
        blanditiis similique odit. Id, dolorem iste. Labore quibusdam impedit
        inventore nemo. Excepturi esse voluptatem omnis dolore quidem accusamus
        at aut voluptatibus. Iure veritatis ut modi, dolorum eius iusto enim
        expedita suscipit ipsa neque dolor amet deleniti laudantium nostrum
        dolore laboriosam nisi ratione atque saepe corrupti delectus? Autem
        quibusdam tenetur dicta! Incidunt est nemo ipsa iure vero atque
        temporibus blanditiis impedit, voluptates, nam eveniet. Cumque qui quas,
        explicabo aliquid maiores doloribus voluptatum sed beatae ratione est
        necessitatibus illum consequuntur magnam pariatur, aspernatur minus
        velit! Tempora modi dolor fugiat amet adipisci distinctio ullam sequi
        doloribus dolorum ipsa nisi, hic sapiente nemo corporis quos
        repellendus. Minus velit nulla eius libero, quo ab. Minima ex tempora
        numquam animi itaque nobis blanditiis sint corporis soluta, debitis
        similique maiores aspernatur possimus non voluptate recusandae totam
        iusto eum pariatur voluptatibus? Eligendi minus facilis nihil fuga
        molestiae inventore accusamus quo vitae nostrum. Officia omnis quas in
        ad quasi maxime aliquam earum quod perferendis ullam quae, illum
        exercitationem accusamus neque odio hic eum recusandae velit
        consequuntur, officiis veniam. Ipsum excepturi aperiam odit
        perspiciatis. Hic laborum soluta maxime voluptatum facere dicta iure
        quidem molestias corporis libero ea vero culpa enim praesentium id quo,
        consectetur tempora suscipit ad delectus repellendus. Sapiente ratione
        officiis, voluptates minima labore corrupti in consequuntur
        necessitatibus vel velit eos dolorem. Ex officia explicabo suscipit non
        doloremque nisi? Quisquam tempore debitis soluta ducimus eius tempora id
        ea veniam eum! Nemo vitae molestias ex, explicabo laborum veniam
        cupiditate quam. Laborum consequatur tempora sequi ducimus soluta rerum
        minus ut, cum a ipsam vel, distinctio aspernatur maiores.
        Exercitationem, explicabo corporis unde, beatae magni similique, eos
        laborum voluptatem sequi sunt consequatur. Neque repellat error hic
        aspernatur laudantium, officiis cupiditate itaque in nesciunt libero
        perspiciatis provident quisquam ut voluptates sunt distinctio, pariatur
        possimus laboriosam corporis! Impedit ipsum officiis quidem. Dolorem nam
        at dolore sequi odio. Non facere, esse dolorem tempore aliquid similique
        est cumque veniam incidunt repellendus exercitationem, atque beatae!
        Odit labore facere amet beatae consectetur adipisci, quis debitis dolor
        rerum, pariatur illum quos, assumenda provident vitae nulla laudantium
        fugiat non eius qui incidunt. Numquam maxime deserunt architecto eaque
        sint incidunt, corporis illo quibusdam iusto nostrum at consequatur
        recusandae tempora enim quam corrupti, provident a atque quasi,
        assumenda consectetur! Reiciendis ratione quos voluptates, quas
        obcaecati nam, minima, unde quasi aut deleniti ea quae delectus minus.
        Minima sed quod fuga officiis ipsam. Commodi ut nobis fugit neque aut
        amet iste ducimus dicta modi provident odio non omnis, molestias magni
        pariatur nostrum? Tempora, sint eos ullam quisquam ab a possimus
        voluptatum omnis. Cum, dolorum perferendis earum blanditiis placeat
        magni, porro explicabo esse quas tempore reiciendis iusto aperiam
        sapiente et! Voluptatibus, facilis ullam. Doloribus quas minima
        necessitatibus in nisi fugiat deserunt nostrum natus et, at pariatur ad
        explicabo consequuntur vitae repellat. Maiores suscipit fugit ex harum
        tempore distinctio officia blanditiis accusamus deserunt quisquam. Ab
        dolore nemo voluptatum repellendus ex reiciendis aliquid quos
        voluptatem? Minima nostrum cumque reiciendis sequi fuga error
        laudantium, natus sit doloribus debitis, dolorum perspiciatis. Voluptas,
        commodi similique consequuntur exercitationem quibusdam placeat
        voluptatem minus inventore dolorum, nam ducimus laboriosam deserunt
        porro qui eum? Facere voluptates esse unde eum animi officiis natus
        earum sapiente vel blanditiis, repudiandae quidem veritatis provident
        odio fugiat cumque officia quod quaerat voluptas adipisci maiores sequi
        doloribus ut. Hic aperiam quam doloribus nihil nam consequuntur sapiente
        debitis ex nisi deserunt quis blanditiis tempore, harum dignissimos
        incidunt optio eos similique cumque ad? Dolores molestiae quod dicta.
        Assumenda error doloribus quaerat illum numquam expedita sapiente cum,
        magnam labore atque, natus aspernatur placeat saepe ab minima
        necessitatibus ipsam at deleniti? Nihil, nobis quas asperiores maxime
        unde adipisci aut at! Eos, doloremque vero at ut ipsum quam
        exercitationem perspiciatis obcaecati voluptates provident voluptatem
        voluptas recusandae natus beatae distinctio. Reiciendis quis laborum
        perferendis quam harum accusantium porro placeat! Reiciendis sit
        recusandae omnis quibusdam beatae repellat, neque dolore ut libero rem
        ipsa repellendus corrupti eligendi vel ipsam eos natus voluptates et,
        error maiores quos doloremque incidunt unde! Libero dolore laborum
        veritatis eligendi quasi animi, commodi ducimus eos, totam ad facilis
        nulla ea! Aspernatur delectus laudantium dolorum dolores, minima aliquid
        ullam doloribus quo debitis distinctio quasi repellendus harum ipsum
        iure. Maiores dignissimos, repellendus asperiores quia facilis et
        dolores, voluptatum totam doloremque fuga odio quaerat voluptatibus enim
        nisi cumque, officiis repellat molestiae animi consequuntur nam corporis
        laboriosam quo consequatur quibusdam? Libero voluptatum necessitatibus
        exercitationem non enim minima, perferendis atque quo ab sunt maiores,
        doloribus aut pariatur, fugiat est earum possimus soluta fugit illum
        veritatis aliquid obcaecati quidem aliquam distinctio. Ipsa quam error
        facilis eligendi? Hic saepe magni qui? Inventore blanditiis, quo eos
        maiores quasi nostrum labore enim eius accusamus nam veritatis
        recusandae dolorum nisi magni quod necessitatibus omnis, cumque itaque,
        exercitationem ab. Maiores aliquid placeat fuga eum ea sed, velit
        maxime, molestiae dicta commodi ratione expedita quibusdam! Nam atque
        voluptatem repellendus, accusamus sit laudantium. Pariatur facilis odit
        aperiam ipsa quae qui veniam. Perferendis ducimus iure alias debitis
        provident similique beatae, ex totam amet eveniet sed dolorem labore
        itaque expedita natus aperiam numquam molestias eligendi, aut iste. Sit,
        consectetur ut natus totam est rem voluptas corporis eaque dolorem nemo
        ratione accusantium cupiditate iure dignissimos doloribus animi
        blanditiis ipsum temporibus architecto, nihil accusamus, minima
        voluptate. Autem blanditiis, culpa quidem eius impedit explicabo
        assumenda. Laborum minus dicta ab molestias molestiae officia vel esse
        porro soluta cumque repellat consequatur eveniet nihil sequi eos,
        temporibus quod? Repudiandae veniam, quasi soluta incidunt consequatur
        dicta neque, ad alias accusantium sequi voluptatem at earum saepe cum
        excepturi perspiciatis odit nihil cupiditate voluptatum esse vitae sed.
        Molestias debitis aliquam laborum non voluptatum fugit vitae
        reprehenderit tempora molestiae et praesentium omnis ut laudantium rem
        dicta aspernatur, deserunt earum dolor beatae voluptatibus sunt. Modi
        excepturi iste nesciunt odit iusto illum maxime dignissimos ea. Quia,
        dicta?
      </div>
    </div>
  );
}

export default Account;
