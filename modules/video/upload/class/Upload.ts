import apiReq from 'modules/utility/api/apiReq'
import { v4 as uuidv4 } from 'uuid'
import { setNestedProperty } from 'modules/util'

/**
 * Creates a video or handles existing
 */

export default class Upload {
    private player: any
    _id: string
    private _title: string
    private _description: string
    private _tags: string[]
    private _author: string
    private _status: string
    private publish: string
    private creation: string
    private mpd: string
    private hls: string
    private media: object[]
    private thumbnail: string
    private thumbtrack: object[]
    private _production: string
    private _cast: string[]
    private _directors: string[]
    private _writers: string[]
    private timeline: object[]
    private duration: string
    private _meta: any
    private metatags: object[]
    private busy: boolean
    updatedFields: object
    usePayload: any
    constructor(author: string, existing?: any, id?: string, title?: string, description?: string, tags?: string[], meta?: object, production?: string, cast?: string[], directors?: string[], writers?: string[], status?: string) {
        this.busy = false
        this.updatedFields = {}
        this.usePayload = this.depedencies()
        if (existing?.id) {
            this._author = existing.author
            this._id = existing.id
            this._title = existing.title ?? ''
            this._description = existing.description ?? ''
            this._tags = existing.tags ?? []
            this.publish = existing.publish ?? ''
            this.creation = existing.creation ?? ''
            this.mpd = existing.mpd ?? ''
            this.hls = existing.hls ?? ''
            this.media = existing.media ?? []
            this.thumbnail = existing.thumbnail ?? ''
            this.thumbtrack = existing.thumbtrack ?? []
            this._production = existing.production ?? ''
            this._cast = existing.cast ?? []
            this._directors = existing.directors ?? []
            this._writers = existing.writers ?? []
            this.timeline = existing.timeline ?? []
            this.duration = existing.duration ?? ''
            this._meta = existing.meta ?? {}
            this.metatags = existing.metatags ?? []
            this.updatedFields = existing.updatedFields && !Array.isArray(existing.updatedFields) ? existing.updatedFields : {}
            this._status = existing.status ?? ''
        } else if (!existing) {
            this._id = id ?? '<database>'
            this._author = author
            this._title = title ?? ''
            this._description = description ?? ''
            this._tags = tags ?? []
            this._meta = meta ?? {}
            this._production = production ?? ''
            this._cast = cast ?? []
            this._directors = directors ?? []
            this._writers = writers ?? []
            this._status = status ?? ''
        }
    }

    depedencies() {
        return {
            title: {
                type: 'string',
                path: 'title'
            },
            description: {
                type: 'text',
                path: 'description',
                rows: 3
            },
            author: {
                type: 'string',
                path: 'authorData.username',
                readonly: true
            },
            tags: {
                type: 'array',
                item: 'string',
                path: 'tags',
                rows: 1
            },
            created: {
                type: 'date',
                path: 'creation',
                readonly: true
            },
            timeline: {
                type: 'array',
                item: 'object',
                path: 'timeline'
            }
        }
    }

    getInstance() {
        return {
            player: this.player,
            id: this._id,
            title: this._title,
            description: this._description,
            tags: this._tags,
            author: this._author,
            status: this._status,
            publish: this.publish,
            creation: this.creation,
            mpd: this.mpd,
            hls: this.hls,
            media: this.media,
            thumbnail: this.thumbnail,
            thumbtrack: this.thumbtrack,
            production: this._production,
            cast: this._cast,
            directors: this._directors,
            writers: this._writers,
            timeline: this.timeline,
            duration: this.duration,
            meta: this._meta,
            metatags: this.metatags,
            busy: this.busy,
            updatedFields: this.updatedFields
        }
    }

    async getUserVideos(props: any, author: string, offset: number, limit: number) {
        let r: any
        if (author && limit > 0) {
            try {
                if (!this.busy) {
                    this.busy = true
                    r = setTimeout(() => {
                        this.busy = false
                    }, 35000)
                    const res = await apiReq('/fetch/fetchhandler', {
                        handlerArgs: [
                            {
                                videoReq: [ { limit: limit, offset: offset * 20, sortField: 'creation', sort: 'desc', author: author } ]
                            }
                        ]
                    })
                    if (res?.data?.fetchedData && res.data.fetchedData[0] && res.data.fetchedData[0]?.videoReq[0]) {
                        this.busy = false
                        clearTimeout(r)
                        setTimeout(() => {
                            props._LocalEventEmitter.dispatch(props?.uploadPageId, {
                                dispatch: 'initializeVideosHandler'
                            })
                        }, 150)
                        return res.data.fetchedData[0].videoReq[0]
                    } else {
                        this.busy = false
                        clearTimeout(r)
                    }
                }
            } catch (err) {
                this.busy = false
                clearTimeout(r)
            }
        }
        return null
    }

    setAssociation(id: string, ofType: string, status: boolean, detail?: string) {
        if (!this._meta['associations']) {
            this._meta['associations'] = {}
        }
        let temp = this.updatedFields
        temp['meta'] = true
        this.updatedFields = temp
        if (status) {
            if (!this._meta['associations'][ofType]) {
                this._meta['associations'][ofType] = {}
            }
            if (!this._meta['associations'][ofType][id]) {
                this._meta['associations'][ofType][id] = {}
            }
            this._meta['associations'][ofType][id][detail ?? 'related'] = true
        } else if (this._meta['associations']?.[ofType]?.[id][detail ?? 'related']) {
            delete this._meta['associations'][ofType][id][detail ?? 'related']
            if (Object.entries(this._meta['associations'][ofType][id]).length === 0) {
                delete this._meta['associations'][ofType][id]
            }
            if (Object.entries(this._meta['associations'][ofType]).length === 0) {
                delete this._meta['associations'][ofType]
            }
        }
        return this
    }

    setAuthorizedBy(id: string, ofType: string, status: boolean) {
        if (!this._meta['authBy']) {
            this._meta['authBy'] = {}
        }
        let temp = this.updatedFields
        temp['meta'] = true
        this.updatedFields = temp
        if (status) {
            if (!this._meta['authBy'][ofType]) {
                this._meta['authBy'][ofType] = {}
            }
            if (!this._meta['authBy'][ofType][id]) {
                this._meta['authBy'][ofType][id] = {}
            }
            this._meta['authBy'][ofType][id]['authorize'] = true
        } else if (this._meta['authBy']?.[ofType]?.[id]) {
            delete this._meta['authBy'][ofType][id]['authorize']
            if (Object.entries(this._meta['authBy'][ofType][id]).length === 0) {
                delete this._meta['authBy'][ofType][id]
            }
            if (Object.entries(this._meta['authBy'][ofType]).length === 0) {
                delete this._meta['authBy'][ofType]
            }
        }
        return this
    }

    getTimeline() {
        return this.timeline
    }

    getClips() {
        return this.timeline.filter(m => m['type'] === 'clip')
    }

    addClip(props: any, startOffset: number, name?: string, url?: string) {
        const useUrl = url ?? `https://${props?.domainUrl}/w?u=${this._id}&time=${startOffset}`
        const timeObject = {
            id: uuidv4(),
            type: 'clip',
            name: name ?? '',
            startOffset: startOffset,
            url: useUrl
        }
        let temp = this.timeline
        temp.push(timeObject)
        this.timeline = temp
        this.handleUsePayload(temp, 'timeline')
    }

    deleteClip(id: string) {
        let temp = this.timeline
        const f = temp.findIndex(m => m['id'] === id)
        if (f > -1) {
            temp.splice(f, 1)
        }
        this.timeline = temp
        this.handleUsePayload(temp, 'timeline')
    }

    setPrice(price: string, currency: string, status: boolean) {
        if (!this._meta['price']) {
            this._meta['price'] = {}
        }
        if (status) {
            this._meta['price']['currency'] = price
        } else {
            delete this._meta['price']['currency']
        }
        let temp = this.updatedFields
        temp['meta'] = true
        this.updatedFields = temp
    }

    processIncoming(existing: any) {
        this._author = existing.author
        this._id = existing.id
        this._title = existing.title ?? ''
        this._description = existing.description ?? ''
        this._tags = existing.tags ?? []
        this.publish = existing.publish ?? ''
        this.creation = existing.creation ?? ''
        this.mpd = existing.mpd ?? ''
        this.hls = existing.hls ?? ''
        this.media = existing.media ?? []
        this.thumbnail = existing.thumbnail ?? ''
        this.thumbtrack = existing.thumbtrack ?? []
        this._production = existing.production ?? ''
        this._cast = existing.cast ?? []
        this._directors = existing.directors ?? []
        this._writers = existing.writers ?? []
        this.timeline = existing.timeline ?? []
        this.duration = existing.duration ?? ''
        this._meta = existing.meta ?? {}
        this.metatags = existing.metatags ?? []
    }

    async setPublish(props: any, value: boolean) {
        return this.runPublish(props, value ? 'publish' : 'unpublish')
    }

    async setPrivate(props: any, value: boolean) {
        return this.runPublish(props, value ? 'private' : 'unprivate')
    }

    async setUpdate(props: any) {
        return this.runPublish(props, 'update')
    }

    async runPublish(props: any, modif: string) {
        let r: any
        try {
            if (!this.busy) {
                this.busy = true
                r = setTimeout(() => {
                    this.busy = false
                }, 35000)
                const instance = this.getInstance()
                delete instance.player
                delete instance.updatedFields
                delete instance['usePayload']
                delete instance['busy']
                const res = await apiReq('/p/publishvideo', {
                    user: props?._loggedIn,
                    videoDocument: instance,
                    modif: modif,
                    updatedFields: this.updatedFields,
                    usePayload: this.usePayload
                })
                this.updatedFields = {}
                if (res?.data?.updated?.id) {
                    this.busy = false
                    clearTimeout(r)
                    return res.data.updated
                }
                this.busy = false
                clearTimeout(r)
            }
        } catch (err) {
            this.busy = false
            clearTimeout(r)
        }
        return null
    }

    handleUsePayload(value: any, modif: string) {
        const property = this.usePayload[modif]
        if (property.path) {
            if (property.type === 'date') {
                value = new Date(value).getTime()
            } else if (property.type === 'array' && property.item === 'string') {
                value = value.split(',')
            }
            let temp = this.updatedFields
            temp[modif] = true
            this.updatedFields = temp
            let obj = setNestedProperty({ ...this.getInstance() }, property.path, value)
            if (obj) {
                this.processIncoming(obj)
            }
        }
        return this
    }

    /**
     * Sets date for record to expire and be deleted. All references to record will be destroyed outside of associations
     * @param date 
     */
    setExpire(date: Date) {
        const temp = this._meta
        temp['automateExpiryDate'] = date
        this._meta = temp
    }

    set title(value: string) {
        this._title = value
        this.handleUsePayload(value, 'title')
    }

    get title(): string {
        return this._title
    }

    set description(value: string) {
        this._description = value
        this.handleUsePayload(value, 'description')
    }

    get description(): string {
        return this._description
    }

    set tags(value: string[]) {
        this._tags = value
        this.handleUsePayload(value, 'tags')
    }

    get tags(): string[] {
        return this._tags
    }

    set meta(value: string[]) {
        let temp = this.updatedFields
        temp['meta'] = true
        this.updatedFields = temp
        this._meta = value
    }

    get meta(): string[] {
        return this._meta
    }

    get author(): string {
        return this._author
    }

    get status(): string {
        return this._status
    }

    get production(): string {
        return this._production
    }

    get cast(): string[] {
        return this._cast
    }

    get directors(): string[] {
        return this._directors
    }

    get writers(): string[] {
        return this._writers
    }

    get id(): string {
        return this._id
    }
}