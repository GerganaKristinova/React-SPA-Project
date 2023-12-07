import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as gemService from '../../services/gemsService'

export default function GemEdit() {
    const navigate = useNavigate()
    const { gemId } = useParams();
    const [gem, setGem] = useState({
        crystal: '',
        energy: '',
        category: '',
        zodiac: '',
        specifics: '',
        cleansing: '',
        imageUrl: '',
        summary: '',
    })

    useEffect(() => {
        gemService.getOneGem(gemId)
            .then(result => setGem(result))
    }, [gemId])

    const editGemSubmitHandler = async (e) => {
        e.preventDefault();

        const editedData = Object.fromEntries(new FormData(e.currentTarget))

        await gemService.editGem(gemId, editedData)

        if(gem.category === 'raw-gems') {
            navigate('/gems/raw-gems')
        } else if(gem.category === 'tumbled-gems') {
            navigate('/gems/tumbled-gems')
        }else if(gem.category === 'shaped-gems') {
            navigate('/gems/shaped-gems')
        }else {
            navigate('/404')
        }

    }

    const onChange = (e) => {
        setGem(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="container py-5">
            <div className="row py-5">
                <form className="col-md-9 m-auto" onSubmit={editGemSubmitHandler}>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="crystal">Crystal</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="crystal"
                                name="crystal" placeholder="Crystal"
                                onChange={onChange}
                                value={gem.crystal}
                            />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="energy">Energy</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="energy"
                                name="energy" placeholder="Energy"
                                onChange={onChange}
                                value={gem.energy}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <select
                            className="form-control mt-1"
                            id="category"
                            name="category"
                            placeholder="Category"
                            onChange={onChange}
                            value={gem.category}

                        >
                            <option value="raw-gems">Raw Gems</option>
                            <option value="tumbled-gems">Tumbled Gems</option>
                            <option value="shaped-gems">Shaped Gems</option>
                        </select>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="zodiac">Zodiac Sign</label>
                        <select
                            className="form-control mt-1"
                            id="zodiac"
                            name="zodiac"
                            placeholder="Zodiac"
                            value={gem.zodiac}
                            onChange={onChange}
                        >
                            <option value="Aries">Aries</option>
                            <option value="Taurus">Taurus</option>
                            <option value="Gemini">Gemini</option>
                            <option value="Cancer">Cancer</option>
                            <option value="Leo">Leo</option>
                            <option value="Virgo">Virgo</option>
                            <option value="Libra">Libra</option>
                            <option value="Scorpio">Scorpio</option>
                            <option value="Sagittarius">Sagittarius</option>
                            <option value="Capricorn">Capricorn</option>
                            <option value="Aquarius">Aquarius</option>
                            <option value="Pisces">Pisces</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="specifics">Specifics</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            id="specifics"
                            name="specifics"
                            placeholder="Specifics"
                            value={gem.specifics}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cleansing">Cleansing</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            id="cleansing"
                            name="cleansing"
                            placeholder="Cleansing"
                            value={gem.cleansing}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl">Image</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload an image"
                            value={gem.imageUrl}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="summary">Summary</label>
                        <textarea
                            className="form-control
                            mt-1"
                            id="summary"
                            name="summary"
                            placeholder="Summary"
                            rows="8"
                            value={gem.summary}
                            onChange={onChange}
                        />

                    </div>
                    <div className="row">
                        <div className="col text-end mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Post Gem</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}