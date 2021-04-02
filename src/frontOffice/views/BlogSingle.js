import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layouts/Header';

const BlogSingle = () => {
    return (
        <>
        <Header/>
    <section className="ftco-section ftco-degree-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ftco-animate">
            <h2 className="mb-3">It is a long established fact a reader be distracted</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
            <p>
              <img src="images/image_7.jpg" alt="" className="img-fluid"/>
            </p>
            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
            <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
            <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
            <p>
              <img src="images/image_8.jpg" alt="" className="img-fluid"/>
            </p>
            <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
            <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
            <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                <Link to="#" className="tag-cloud-link">Life</Link>
                <Link to="#" className="tag-cloud-link">Sport</Link>
                <Link to="#" className="tag-cloud-link">Tech</Link>
                <Link to="#" className="tag-cloud-link">Travel</Link>
              </div>
            </div>
            
            <div className="about-author d-flex p-4 bg-light">
              <div className="bio mr-5">
                <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4"/>
              </div>
              <div className="desc">
                <h3>George Washington</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>


            <div className="pt-5 mt-5">
              <h3 className="mb-5">6 Comments</h3>
              <ul className="comment-list">
                <li className="comment">
                  <div className="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">October 03, 2018 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><Link to="#" className="reply">Reply</Link></p>
                  </div>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">October 03, 2018 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><Link to="#" className="reply">Reply</Link></p>
                  </div>

                  <ul className="children">
                    <li className="comment">
                      <div className="vcard bio">
                        <img src="images/person_1.jpg" alt="Image placeholder"/>
                      </div>
                      <div className="comment-body">
                        <h3>John Doe</h3>
                        <div className="meta">October 03, 2018 at 2:21pm</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                        <p><Link to="#" className="reply">Reply</Link></p>
                      </div>


                      <ul className="children">
                        <li className="comment">
                          <div className="vcard bio">
                            <img src="images/person_1.jpg" alt="Image placeholder"/>
                          </div>
                          <div className="comment-body">
                            <h3>John Doe</h3>
                            <div className="meta">October 03, 2018 at 2:21pm</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                            <p><Link to="#" className="reply">Reply</Link></p>
                          </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img src="images/person_1.jpg" alt="Image placeholder"/>
                                </div>
                                <div className="comment-body">
                                  <h3>John Doe</h3>
                                  <div className="meta">October 03, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><Link to="#" className="reply">Reply</Link></p>
                                </div>
                              </li>
                            </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">October 03, 2018 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><Link to="#" className="reply">Reply</Link></p>
                  </div>
                </li>
              </ul>              
              <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form action="#" className="p-5 bg-light">
                  <div className="form-group">
                    <label for="name">Name *</label>
                    <input type="text" className="form-control" id="name"/>
                  </div>
                  <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" className="form-control" id="email"/>
                  </div>
                  <div className="form-group">
                    <label for="website">Website</label>
                    <input type="url" className="form-control" id="website"/>
                  </div>

                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary"/>
                  </div>

                </form>
              </div>
            </div>
        </div>
        </div>
    </div>
    </section>
        </>
    );
};
export default BlogSingle;