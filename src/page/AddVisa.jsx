const AddVisa = () => {
  const handleAddVisa = (event) => {
    event.preventDefault();
    const form = event.target;
    const country_name = form.country_name.value;
    const url = form.url.value;
    const visa_type = form.visa_type.value;
    const processing_time = form.processing_time.value;
    const validity = form.validity.value;
    const application_method = form.application_method.value;
    const processing_date = form.processing_date.value;
    const description = form.description.value;
    const age_restriction = form.age_restriction.value;
    const fee = form.fee.value;

    const required_documents = Array.from(
      form.querySelectorAll('input[name="required_documents"]:checked')
    ).map((checkbox) => checkbox.value);

    const value = {
      country_name,
      url,
      visa_type,
      processing_time,
      validity,
      application_method,
      required_documents,
      description,
      processing_date,
      age_restriction,
      fee,
    };
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleAddVisa} className="container mx-auto">
        <div className="flex gap-10 my-4">
          <div className="w-full">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Country Name:
            </label>
            <input
              name="country_name"
              type="text"
              className="input w-full"
              placeholder="Country Name"
              required
            />
          </div>
          <div className="w-full">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Country Image:
            </label>
            <input
              name="url"
              type="url"
              className="input w-full"
              placeholder="image URL"
            />
          </div>
        </div>

        <div className="flex gap-10 my-4">
          <div className="w-full">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Validity:
            </label>
            <input
              name="validity"
              type="text"
              className="input w-full"
              placeholder="Validity"
              required
            />
          </div>
          <div className="w-full">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Application Method:
            </label>
            <input
              name="application_method"
              type="text"
              className="input w-full"
              placeholder="Application Method"
              required
            />
          </div>
        </div>

        <div className="flex gap-10 my-4">
          <div className="w-full">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Visa Type:
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded-md"
              name="visa_type"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Visa Type
              </option>
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Official visa">Official visa</option>
            </select>
          </div>

          <div className="w-full">
          <label className="fieldset-label my-2 text-lg font-semibold">
              Fee:
            </label>

            <select
              className="w-full border border-gray-300 p-2 rounded-md"
              name="fee"
              required
              defaultValue=""
            >
            <option value="" disabled>
                Select Fee
              </option>
              <option name="fee" value="5000 USD">
                5000 USD
              </option>
              <option name="fee" value="7000 USD">
                7000 USD
              </option>
              <option name="fee" value="12000 USD">
                12000 USD
              </option>
            </select>
          </div>
        </div>

        <div className="flex gap-10 my-4">
          <div className="w-[48%]">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Required Documents:
            </label>
            <input
              type="number"
              id="age_restriction"
              name="age_restriction"
              className="w-full"
              required
            />
          </div>

          <div className="flex gap-8 w-[50%]">
            <div className="w-full">
              <label className="fieldset-label my-2 text-lg font-semibold">
                Processing Time:
              </label>
              <input
                name="processing_time"
                type="time"
                className="input w-full"
                placeholder="processing time"
                required
              />
            </div>
            <div className="w-full">
              <label className="fieldset-label my-2 text-lg font-semibold">
                Processing Date:
              </label>
              <input
                name="processing_date"
                type="date"
                className="input w-full"
                placeholder="processing date"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-10 my-4">
          <div className="w-full">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Required Documents:
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="passport"
                name="required_documents"
                value="Valid passport"
              />
              <label className="fieldset-label">Valid passport</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="application_form"
                name="required_documents"
                value="Visa application form"
              />
              <label className="fieldset-label">Visa application form</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="photo"
                name="required_documents"
                value="Recent passport-sized photograph"
              />
              <label className="fieldset-label">
                Recent passport-sized photograph
              </label>
            </div>
          </div>
          <div className="w-full">
            <label className="fieldset-label my-2 text-lg font-semibold">
              Description:
            </label>
            <textarea
              className="w-full"
              id="description"
              name="description"
              required
            ></textarea>
          </div>
        </div>

        <button className="btn btn-primary w-full my-4" type="submit">
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;
