/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <div>
          In the realm of artificial intelligence, this is called the “one-shot learning” challenge. In a more abstract way, can you develop a computer vision system that can look at two images it has never seen before and say whether they represent the same object?

Data is one of the key challenges in deep learning, the branch of artificial intelligence that has had the most success in computer vision. Deep learning algorithms are notorious for requiring large amount of training examples to perform simple tasks such as detecting objects in images.

But interestingly, if configured properly, deep neural networks, the key component of deep learning systems, can perform one-shot learning on simple tasks. In recent years, one-shot learning AI has found successful applications including facial recognition and passport checks.

        </div>
    </div>
    );
  }
}

export default About;
