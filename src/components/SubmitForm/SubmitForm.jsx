import { useState, useEffect } from 'react';
import { PrismicText } from '@prismicio/react';
import { Formik, Field, Form } from 'formik';
import * as prismicH from '@prismicio/helpers';

function SubmitForm({ slice }) {
  const [imageSrc, setImageSrc] = useState();
  useEffect(() => {
    if (slice) {
      const src = prismicH.asImageSrc(slice.primary.image);
      setImageSrc(src);
    }
  }, [slice]);

  return (
    <div className="sm:w-5/6 md:flex">
      <div className="sm:w-2/3 md:my-8 md:text-left text-center">
        <div className="text-xl">
          {slice && <PrismicText field={slice.primary.questionform} />}
        </div>
        <div className="sm:w-1/2 py-4 text-5xl uppercase">
          {slice && <PrismicText field={slice.primary.titleform} />}
        </div>
        <div className="pt-4 px-4 md:grid justify-items-end">
          <div className="border-4 md:w-5/6 border-black grid px-8 py-4">
            <Formik
              initialValues={{
                name: '',
                number: '',
                text: '',
              }}
              onSubmit={async (values) => {
                // eslint-disable-next-line no-promise-executor-return
                await new Promise((r) => setTimeout(r, 500));
                // eslint-disable-next-line no-alert
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <div className="w-full md:pl-8">
                  <Field
                    className="border-b-2 border-black hover:border-b-3 sm:w-1/3 w-full pt-4 text-xl focus-visible:border-b-2 focus:outline-none focus-visible:outline-none"
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="w-full md:pl-8">
                  <Field
                    className="border-b-2 border-black hover:border-b-3 sm:w-1/3 w-full pt-4 text-xl focus-visible:border-b-2 focus:outline-none focus-visible:outline-none"
                    type="text"
                    name="number"
                    placeholder="Ваш номер"
                  />
                </div>
                <div className="w-full md:pl-8">
                  <Field
                    className="sm:w-4/5 w-full border-2 border-black mb-4 mt-8 h-20 text-left pl-2 pt-4"
                    type="textarea"
                    name="text"
                    placeholder="Какая фотоссесия вам нужна?"
                  />
                </div>
                <div className="w-full pl-8 mb-4">
                  <button
                    className="py-2 px-4 rounded border-2 border-black text-xl text-center justify-self-end hover:bg-black hover:text-white"
                    type="submit"
                  >
                    <p className="mx-4">Записаться</p>
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 md:block hidden grid justify-items-center p-4">
        <div className="shadow-border shadow-border-down">
          {imageSrc && <img src={imageSrc} alt="" />}
        </div>
      </div>
    </div>
  );
}

export default SubmitForm;
